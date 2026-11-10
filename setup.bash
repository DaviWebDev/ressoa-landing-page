#!/usr/bin/env bash

set -Eeuo pipefail

project_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$project_root"

if ! command -v node >/dev/null 2>&1; then
  printf 'Erro: instale Node.js conforme a versão exigida em package.json e execute este script novamente.\n' >&2
  exit 1
fi

if ! node <<'NODE'
const fs = require("node:fs");
const { engines } = JSON.parse(fs.readFileSync("package.json", "utf8"));
const minimum = engines.node.match(/^>=\s*(\d+)\.(\d+)\.(\d+)$/);

if (!minimum) {
  console.error(`Não foi possível interpretar engines.node: ${engines.node}`);
  process.exit(1);
}

const current = process.versions.node.split(".").map(Number);
const required = minimum.slice(1).map(Number);
const firstDifference = current.findIndex((part, index) => part !== required[index]);
const isSupported =
  firstDifference === -1 || current[firstDifference] > required[firstDifference];

if (!isSupported) {
  console.error(`Node.js ${engines.node} é necessário; versão atual: ${process.versions.node}`);
  process.exit(1);
}
NODE
then
  exit 1
fi

if ! command -v pnpm >/dev/null 2>&1; then
  printf 'Erro: pnpm não encontrado. Instale a versão indicada em package.json e execute este script novamente.\n' >&2
  exit 1
fi

expected_pnpm="$(node -p 'require("./package.json").packageManager.split("@").at(-1)')"
actual_pnpm="$(pnpm --version)"
if [[ "$actual_pnpm" != "$expected_pnpm" ]]; then
  printf 'Erro: este projeto requer pnpm %s; versão atual: %s.\n' "$expected_pnpm" "$actual_pnpm" >&2
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  printf 'Erro: Python 3 não encontrado; instale Python 3 para usar pipx e Semgrep.\n' >&2
  exit 1
fi

if ! command -v pipx >/dev/null 2>&1; then
  printf 'Erro: pipx não encontrado. Instale pipx para instalar o Semgrep em um ambiente Python isolado.\n' >&2
  exit 1
fi

if ! command -v betterleaks >/dev/null 2>&1; then
  printf 'Erro: Betterleaks v1.9.0 ou mais recente não encontrado. Instale-o a partir de https://github.com/betterleaks/betterleaks/releases.\n' >&2
  exit 1
fi

betterleaks_version="$(betterleaks version | grep -Eo '[0-9]+\.[0-9]+\.[0-9]+' | head -n 1 || true)"
if ! node - "$betterleaks_version" <<'NODE'
const version = process.argv[2]?.split(".").map(Number);
const minimum = [1, 9, 0];

if (
  !version ||
  version.length !== minimum.length ||
  version.some((part) => !Number.isInteger(part))
) {
  process.exit(1);
}

for (let index = 0; index < minimum.length; index += 1) {
  if (version[index] > minimum[index]) break;
  if (version[index] < minimum[index]) process.exit(1);
}
NODE
then
  printf 'Erro: Betterleaks v1.9.0 ou mais recente é necessário para os hooks. Versão atual: %s\n' "${betterleaks_version:-desconhecida}" >&2
  exit 1
fi

semgrep_version=1.184.0
pipx_bin_dir="$(pipx environment --value PIPX_BIN_DIR)"
export PATH="$pipx_bin_dir:$PATH"
if ! command -v semgrep >/dev/null 2>&1 || [[ "$(semgrep --version)" != "$semgrep_version" ]]; then
  pipx install --force "semgrep==$semgrep_version"
fi
if [[ "$(semgrep --version)" != "$semgrep_version" ]]; then
  printf 'Erro: não foi possível preparar Semgrep %s via pipx.\n' "$semgrep_version" >&2
  exit 1
fi

has_lighthouse_workflow=false
has_lighthouse_config=false
[[ ! -f .github/workflows/lighthouse.yml ]] || has_lighthouse_workflow=true
[[ ! -f lighthouserc.json ]] || has_lighthouse_config=true

if [[ "$has_lighthouse_workflow" != "$has_lighthouse_config" ]]; then
  printf 'Erro: configuração opcional do Lighthouse CI não encontrada ou incompleta.\n' >&2
  exit 1
fi

printf 'Dependências diretas declaradas em package.json:\n'
node <<'NODE'
const { dependencies = {}, devDependencies = {} } = require("./package.json");

for (const [label, packages] of [
  ["Produção", dependencies],
  ["Desenvolvimento", devDependencies],
]) {
  console.log(`\n${label}:`);
  for (const [name, version] of Object.entries(packages)) {
    console.log(`  ${name}@${version}`);
  }
}
NODE
printf '\n'

remove_prod=()
remove_dev=()
if [[ -t 0 ]]; then
  printf 'Deseja remover alguma dependência antes da instalação? [y/N] '
  if ! IFS= read -r remove_dependencies; then
    printf '\nErro: não foi possível ler a resposta.\n' >&2
    exit 1
  fi

  case "$remove_dependencies" in
    [yY]|[yY][eE][sS])
      printf 'Informe os nomes exatos separados por espaço. A remoção altera package.json e pnpm-lock.yaml.\n'
      printf 'Dependências para remover: '
      if ! IFS= read -r dependencies_to_remove; then
        printf '\nErro: não foi possível ler a lista de dependências.\n' >&2
        exit 1
      fi

      read -r -a requested_removals <<< "$dependencies_to_remove"
      for package in "${requested_removals[@]}"; do
        if ! node -e 'const p=require("./package.json"); process.exit([...Object.keys(p.dependencies ?? {}), ...Object.keys(p.devDependencies ?? {})].includes(process.argv[1]) ? 0 : 1)' "$package"; then
          printf 'Erro: %s não é uma dependência direta de package.json.\n' "$package" >&2
          exit 1
        fi

        if node -e 'process.exit(Object.hasOwn(require("./package.json").dependencies ?? {}, process.argv[1]) ? 0 : 1)' "$package"; then
          remove_prod+=("$package")
        else
          remove_dev+=("$package")
        fi
      done
      ;;
    *)
      printf 'Todas as dependências serão mantidas.\n'
      ;;
  esac
else
  printf 'Sem terminal interativo: todas as dependências serão mantidas.\n'
fi

keep_lighthouse=false
if [[ "$has_lighthouse_workflow" == true ]]; then
  if [[ ! -t 0 ]]; then
    printf 'Erro: execute este assistente em um terminal interativo para escolher as opções do projeto.\n' >&2
    exit 1
  fi

  printf 'A stack obrigatória será instalada conforme package.json e pnpm-lock.yaml.\n'
  printf 'O ESLint inclui regras de segurança; Semgrep roda via pipx e Betterleaks como CLI local.\n\n'
  printf 'Deseja manter o workflow opcional do Lighthouse CI neste projeto? [y/N] '
  if ! IFS= read -r enable_lighthouse; then
    printf '\nErro: não foi possível ler a resposta.\n' >&2
    exit 1
  fi

  case "$enable_lighthouse" in
    [yY]|[yY][eE][sS])
      keep_lighthouse=true
      ;;
    *)
      printf 'Lighthouse CI será desabilitado neste projeto.\n'
      ;;
  esac
else
  printf 'Lighthouse CI já está desabilitado neste projeto.\n'
fi

if ((${#remove_prod[@]})); then
  pnpm remove --lockfile-only --save-prod "${remove_prod[@]}"
fi
if ((${#remove_dev[@]})); then
  pnpm remove --lockfile-only --save-dev "${remove_dev[@]}"
fi

printf '\nDependências que serão instaladas após as remoções selecionadas:\n'
node <<'NODE'
const { dependencies = {}, devDependencies = {} } = require("./package.json");

for (const [label, packages] of [
  ["Produção", dependencies],
  ["Desenvolvimento", devDependencies],
]) {
  console.log(`\n${label}:`);
  for (const [name, version] of Object.entries(packages)) {
    console.log(`  ${name}@${version}`);
  }
}
NODE

pnpm install --frozen-lockfile

if node -e 'const p=require("./package.json"); process.exit(p.devDependencies?.["@playwright/test"] ? 0 : 1)'; then
  pnpm exec playwright install
fi

if [[ "$keep_lighthouse" == true ]]; then
  printf 'Lighthouse CI habilitado. Configure LHCI_GITHUB_APP_TOKEN nos secrets do repositório se usar a integração com GitHub.\n'
else
  if [[ "$has_lighthouse_workflow" == true ]]; then
    rm -- .github/workflows/lighthouse.yml lighthouserc.json
    printf 'Configuração do Lighthouse CI removida deste projeto.\n'
  fi
fi

printf '\nDependências instaladas. Próximo passo: pnpm dev\n'
