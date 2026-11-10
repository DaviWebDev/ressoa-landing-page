# Astro Starter

Template base para projetos Astro com pnpm, TypeScript, ESLint, Prettier, Playwright, Docker e GitHub Actions. Remova ou ajuste as ferramentas que não fizerem sentido para o projeto.

## Início de um projeto

1. **Crie um repositório a partir deste template.** No GitHub, use **Use this template**; ou clone o repositório se preferir manter o histórico atual.
2. **Personalize os metadados.** Em `package.json`, troque `name` (`astro-starter`) pelo nome do projeto, em formato de pacote npm. Atualize este README com o propósito e as instruções específicas do projeto.
3. **Confira os requisitos locais.** Instale uma versão do Node compatível com `engines` no `package.json`, use a versão de pnpm definida em `packageManager` (atualmente `pnpm@12.16.1`), tenha Python 3 e `pipx`, e instale [Betterleaks v1.9.0 ou mais recente](https://github.com/betterleaks/betterleaks/releases). O assistente instala o Semgrep via `pipx`; Betterleaks deve estar acessível no `PATH`. Confira a instalação com `betterleaks version`. A CI usa Betterleaks v1.10.0 fixado por digest.
4. **Execute o assistente de configuração.**

   ```sh
   ./setup.bash
   ```

   O assistente verifica Node.js, pnpm, Python 3, pipx e Betterleaks, instala a versão fixada do Semgrep em um ambiente Python isolado e lista as dependências de produção e desenvolvimento declaradas em `package.json`. Por padrão, mantém todas; se você optar por remover dependências diretas, informe seus nomes exatos separados por espaço, e o assistente atualiza `package.json` e `pnpm-lock.yaml` antes de instalar o restante com `pnpm install --frozen-lockfile`. Se `@playwright/test` permanecer nas dependências, o assistente também baixa os navegadores do Playwright; dependências de sistema operacional dos navegadores devem ser instaladas separadamente. O assistente também pergunta se deseja manter o Lighthouse CI. Instale as ferramentas de sistema antes; o script exige as versões indicadas, mas não as instala. Se optar por não usar Lighthouse, ele remove apenas o workflow e a configuração correspondentes. Use `pnpm add <pacote>` ou `pnpm add -D <pacote>` para adicionar outras dependências; não edite o lockfile manualmente.

5. **Inicie o desenvolvimento e personalize a aplicação.**

   ```sh
   pnpm dev
   ```

   Adicione as páginas, componentes, conteúdo, metadados e variáveis de ambiente do projeto. Nunca versione segredos; mantenha-os em arquivos `.env` ignorados pelo Git e configure-os separadamente nos ambientes de deploy.

6. **Ajuste os testes e, se mantido, o Lighthouse.** Adicione testes em `tests/` e adapte os projetos/servidor em `playwright.config.ts`. O Lighthouse CI coleta páginas HTML de `dist/` automaticamente; ajuste `lighthouserc.json` se precisar limitar URLs, alterar categorias ou adequar os limites de score ao projeto.
7. **Valide antes de publicar.**

   ```sh
   pnpm lint
   pnpm exec astro check
   pnpm audit
   pnpm build
   pnpm exec playwright test
   ```

   O audit completo inclui dependências de desenvolvimento e consulta o registro npm. Para auditar apenas dependências de produção, use `pnpm audit:prod`. O ESLint inclui regras de segurança para JavaScript e o Semgrep faz SAST de `src/`. O Semgrep é instalado via pipx, não como pacote npm.

8. **Decida se vai usar Docker.** Os comandos usam nomes genéricos e Compose:

   ```sh
   docker compose up --build
   pnpm docker:preview
   pnpm docker:stop-prod
   ```

   O Compose de desenvolvimento publica a porta `4321`; a prévia de produção publica `4322`. Docker é opcional para desenvolvimento local e não é necessário para os hooks de Betterleaks e Semgrep.

9. **Revise a CI e o Dependabot.** Ajuste os workflows em `.github/workflows/` e `.github/dependabot.yml` conforme as ferramentas e políticas do projeto. A CI verifica workflows, secrets, Semgrep, lint, dependências de produção, tipos e build; os testes E2E rodam em PRs e a matriz completa roda em pushes para `main` quando há testes Playwright em `tests/`. Se ainda não houver testes, esses passos são ignorados. Se mantido pelo assistente, Lighthouse roda em um workflow separado nos pushes para `main`, quando o build gera arquivos HTML.
10. **Configure as opções do GitHub em cada repositório.** Elas não são copiadas pelo template:
    - Em **Settings → General → Pull Requests**, habilite **Allow auto-merge** se quiser usar o auto-merge do Dependabot.
    - Em **Settings → Rules → Rulesets** (ou **Branches → Branch protection rules**), proteja `main`, exija pull request e os checks da CI que devem bloquear o merge. Selecione os checks após uma execução bem-sucedida; inclua `check`, `actionlint` e os jobs E2E que quiser exigir. Lighthouse roda só em `push`, então não pode ser exigido como check de PR.
    - Não configure bypass para colaboradores ou equipes que devem seguir a regra. Para impedir bypass inclusive por administradores, habilite **Do not allow bypassing** (ou a opção equivalente). Exigir PR não exige aprovação por si só; configure também o número mínimo de aprovações se quiser revisão obrigatória.
    - Hooks locais podem ser ignorados com `--no-verify`; eles são uma primeira linha de defesa, não uma barreira de segurança. A proteção da branch, com PR obrigatório e checks exigidos, impede push direto e garante as verificações antes do merge.
    - O workflow do Dependabot habilita auto-merge somente para atualizações patch e minor. Os checks obrigatórios da branch determinam quando o GitHub conclui o merge.
    - Se mantiver o workflow Lighthouse e quiser publicar os resultados como checks no GitHub, configure `LHCI_GITHUB_APP_TOKEN` em cada repositório:
      1. Instale e autorize o [Lighthouse CI GitHub App](https://github.com/apps/lighthouse-ci) para o proprietário do repositório e selecione esse repositório. Em uma organização, pode ser necessária a aprovação de um administrador.
      2. Copie o token exibido na página de confirmação da autorização.
      3. No repositório, abra **Settings → Secrets and variables → Actions → New repository secret**. Use `LHCI_GITHUB_APP_TOKEN` como nome e cole o token em **Secret**.
      4. O workflow já lê esse secret; ele roda em pushes para `main`. O token permite que o Lighthouse CI publique status checks. Não coloque o valor no código ou em arquivos versionados. Sem o token, a coleta e o upload temporário dos relatórios ainda podem rodar, mas os checks do GitHub não serão publicados.

      Consulte também a [documentação oficial de configuração do Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md#github-app-method-recommended). Se preferir não usar o GitHub App, ela descreve a alternativa com token pessoal `LHCI_GITHUB_TOKEN`; esse nome é diferente e não corresponde ao secret usado pelo workflow deste projeto.

    - Se não usar Lighthouse, o assistente remove o workflow e a configuração correspondentes.
    - A CI verifica todo o histórico com Betterleaks, enquanto os hooks verificam secrets staged no commit e o histórico completo antes do push. O Semgrep no pre-commit analisa apenas arquivos staged em `src/`; a CI analisa `src/` com severidade `WARNING`.

## Scripts úteis

| Comando                             | Uso                                                |
| ----------------------------------- | -------------------------------------------------- |
| `pnpm dev`                          | Servidor de desenvolvimento Astro                  |
| `pnpm lint`                         | ESLint                                             |
| `pnpm format` / `pnpm format:check` | Formatar arquivos / verificar formatação           |
| `pnpm audit` / `pnpm audit:prod`    | Auditar todas as dependências / apenas produção    |
| `pnpm security:scan`                | Rodar Semgrep em `src/` com severidade `WARNING`   |
| `pnpm docker:preview`               | Construir e iniciar a versão de produção em Docker |
| `pnpm docker:stop-prod`             | Parar a prévia de produção                         |
