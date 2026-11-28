<h1 align="center">◈ Ressoa</h1>

<p align="center">
  <strong>Menos ruído. Mais espaço para sentir.</strong><br />
  Landing page conceitual de um estúdio de arquitetura e conforto acústico.<br />
  Do layout gerado no Figma a uma experiência web responsiva, estática e orientada à performance.
</p>

<p align="center">
  <a href="https://ressoa-landing-page.vercel.app/"><img alt="Ver o site" src="https://img.shields.io/badge/ver_o_site-B7492D?style=for-the-badge&logo=vercel&logoColor=white" /></a>
  <a href="https://github.com/DaviWebDev/ressoa-landing-page/actions/workflows/lighthouse.yml"><img alt="Meta Lighthouse 90+" src="https://img.shields.io/badge/Lighthouse-90%2B-222B26?style=for-the-badge&logo=lighthouse&logoColor=white" /></a>
</p>

<p align="center">
  <a href="https://github.com/DaviWebDev/ressoa-landing-page/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/DaviWebDev/ressoa-landing-page/actions/workflows/ci.yml/badge.svg?branch=main" /></a>
  <a href="https://github.com/DaviWebDev/ressoa-landing-page/actions/workflows/lighthouse.yml"><img alt="Lighthouse CI" src="https://github.com/DaviWebDev/ressoa-landing-page/actions/workflows/lighthouse.yml/badge.svg?branch=main" /></a>
</p>

<p align="center">
  <img alt="Astro" src="https://img.shields.io/badge/Astro-BC52EE?style=flat-square&logo=astro&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img alt="Playwright" src="https://img.shields.io/badge/Playwright-2EAD33?style=flat-square" />
  <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
  <img alt="Semgrep" src="https://img.shields.io/badge/Semgrep-167A6C?style=flat-square&logo=semgrep&logoColor=white" />
</p>

<p align="center">
  <a href="#-sobre">Sobre</a> ·
  <a href="#-princípios-de-desenvolvimento">Princípios</a> ·
  <a href="#-stack">Stack</a> ·
  <a href="#-destaques">Destaques</a> ·
  <a href="#-como-rodar">Como rodar</a> ·
  <a href="#-qualidade-e-ci">Qualidade e CI</a>
</p>

---

## 📖 Sobre

**Ressoa** é um projeto pessoal de portfólio que simula a presença digital de um estúdio especializado em conforto acústico integrado à arquitetura. A proposta da marca é apresentar soluções para residências, escritórios e espaços de hospitalidade, equilibrando estética, funcionalidade e bem-estar.

O layout original foi gerado com inteligência artificial no **Figma** e utilizado como referência visual para a implementação. Minha contribuição foi transformar esse layout em código, estruturando os componentes, adaptando a interface aos diferentes tamanhos de tela, implementando as interações e configurando a infraestrutura de desenvolvimento, testes e segurança.

O foco deste projeto não é a autoria do design original, mas a capacidade de traduzir uma proposta visual em uma aplicação front-end organizada, funcional e preparada para publicação.

**Objetivos**

- 🎯 Manter a meta de **90+ no Lighthouse** em desempenho, acessibilidade e SEO, com verificações automatizadas.
- 🧩 Utilizar **JavaScript vanilla com TypeScript**, sem frameworks de interface no navegador.
- 📱 Construir uma interface responsiva, com imagens adaptadas a diferentes enquadramentos e tipografia fluida.
- 🔒 Aplicar práticas de segurança desde o desenvolvimento até a entrega dos arquivos estáticos.
- 🔁 Trabalhar com um fluxo de desenvolvimento próximo ao de projetos reais: lint, testes E2E, análise de código, auditoria de dependências e integração contínua.

> [!NOTE]
> A Ressoa é uma marca fictícia. O site, os serviços apresentados e o Café Aurora têm finalidade conceitual e demonstrativa. Não há atendimento comercial, contratação de serviços ou recebimento de mensagens.

## 🧭 Princípios de desenvolvimento

O projeto prioriza a simplicidade arquitetural, o uso de recursos nativos da plataforma web e a adoção consciente de ferramentas.

- **Simplicidade:** evitar dependências e abstrações que não entreguem benefícios proporcionais à sua complexidade.
- **Performance:** reduzir o JavaScript enviado ao navegador e aproveitar a geração estática do Astro.
- **Testes estratégicos:** concentrar os testes E2E nos comportamentos críticos da interface, considerando o custo de manutenção.
- **Segurança preventiva:** integrar verificações de segurança ao fluxo de desenvolvimento e publicação.
- **Manutenibilidade:** tomar decisões técnicas proporcionais ao escopo e às necessidades reais do projeto.

A proposta não é utilizar o maior número possível de ferramentas, mas utilizar as ferramentas certas pelos motivos certos.

## 🧰 Stack

<p>
  <img alt="Astro, TypeScript, Tailwind CSS, HTML, CSS, JavaScript, Figma, Vercel, Docker, Nginx, GitHub Actions e pnpm" src="https://skillicons.dev/icons?i=astro,ts,tailwind,html,css,js,figma,vercel,docker,nginx,githubactions,pnpm&perline=12" />
</p>

| Área            | Tecnologias e aplicação                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| Framework       | [Astro](https://astro.build/) — geração de HTML estático e componentização.                                     |
| Linguagem       | TypeScript — scripts de interface, tipagem dos dados e acesso ao DOM.                                           |
| Estilo          | Tailwind CSS 4, `tailwind-clamp`, CSS local dos componentes e tokens de tema.                                   |
| Imagens         | `astro:assets`, `getImage()` e Sharp — conversão para WebP e otimização no build.                               |
| Fontes e ícones | Manrope variável em WOFF2 local, API de fontes do Astro e `astro-icon`.                                         |
| SEO             | `astro-seo`, `@astrojs/sitemap`, URLs canônicas e `robots.txt`.                                                 |
| Testes          | [Playwright](https://playwright.dev/) — Chromium, Firefox, WebKit e perfil móvel Pixel 7.                       |
| Qualidade       | ESLint, `eslint-plugin-astro`, `eslint-plugin-security`, Prettier, Husky e lint-staged.                         |
| Segurança       | [Betterleaks](https://github.com/betterleaks/betterleaks), [Semgrep](https://semgrep.dev/) e auditoria do pnpm. |
| Infraestrutura  | Vercel, Docker, Nginx, GitHub Actions, Lighthouse CI e Dependabot.                                              |

## ✨ Destaques

### Interface e organização

- **Arquitetura por seções:** Hero, Soluções, Projeto conceitual, Processo, FAQ, Contato e Rodapé compõem a landing page.
- **Conteúdo separado da apresentação:** soluções, etapas do processo, perguntas frequentes e dados do rodapé ficam em módulos TypeScript dentro de `src/data/`.
- **Identidade visual consistente:** tons de verde escuro, terracota e neutros, definidos como tokens no tema do Tailwind; Manrope como família tipográfica principal.
- **FAQ sem JavaScript:** utiliza os elementos nativos `<details>` e `<summary>`, com estilos e transições CSS.
- **Menu responsivo em TypeScript:** abertura e fechamento, atualização de `aria-expanded` e `aria-label`, uso de `inert`, bloqueio da rolagem, fechamento ao clicar fora, selecionar um link ou pressionar `Escape`, além de redefinição do estado ao mudar de breakpoint.

### ⚡ Performance

A estratégia é entregar conteúdo estático e reservar JavaScript para as interações que realmente precisam dele.

| Recurso               | Decisão técnica                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Renderização          | HTML gerado no build pelo Astro, sem hidratação de frameworks de interface.                                                    |
| Imagem principal      | `<picture>` com três enquadramentos, `loading="eager"` e `fetchpriority="high"`.                                               |
| Imagem do Café Aurora | `<picture>` responsivo, `loading="lazy"` e `fetchpriority="low"`.                                                              |
| Otimização de imagens | Conversão para WebP com qualidade 80 por meio de `getImage()`.                                                                 |
| Estabilidade visual   | Dimensões explícitas nas imagens e proporções responsivas no showcase, para ajudar a reduzir deslocamentos de layout.          |
| Fontes                | Manrope variável local, em um arquivo WOFF2 para pesos de 400 a 800.                                                           |
| CSS                   | Folhas de estilo incorporadas ao HTML pela configuração `inlineStylesheets: "always"`, reduzindo requisições separadas de CSS. |
| Cache                 | Assets com hash de `/_astro/` configurados para cache de longa duração e imutável.                                             |

### ♿ Acessibilidade e navegação

- Uso de elementos semânticos como `main`, `section`, `nav`, `form`, `label` e `details`.
- Menu móvel com gerenciamento de estado acessível e retorno do foco ao botão ao fechar com `Escape`.
- Campos de formulário com rótulos associados, indicador visual de foco nas opções e direcionamento do foco ao primeiro requisito inválido no envio.
- Navegação interna por âncoras, com `scroll-margin-top` para compensar a altura do cabeçalho.
- Respeito à preferência `prefers-reduced-motion` na rolagem global e em algumas transições da interface.

### 📬 Formulário demonstrativo

O formulário foi implementado com TypeScript e APIs nativas do DOM, sem integração com serviços externos.

- Validação de nome com suporte a letras Unicode, acentos, espaços, hífens e apóstrofos, conforme as regras implementadas.
- Validação básica do formato de e-mail e verificação da seleção do tipo de ambiente.
- Mensagens específicas por campo e aviso geral atualizado conforme os requisitos são preenchidos.
- Interrupção do envio pelo JavaScript com `preventDefault()` e uso de `textContent` para exibir as mensagens.
- Ausência de back-end, banco de dados ou serviço de envio de mensagens.

> [!IMPORTANT]
> O formulário não deve receber informações pessoais reais. Sua finalidade é demonstrar comportamento de interface e validação local, não coletar leads. A política de privacidade descreve também as limitações quando o JavaScript não está disponível e o possível processamento de dados técnicos pela hospedagem.

### 🔒 Segurança e privacidade

| Camada                       | Implementação                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------ |
| CSP                          | Política de segurança de conteúdo configurada no Astro, incluindo `form-action 'none'`.                |
| Proteção contra incorporação | `X-Frame-Options: DENY`.                                                                               |
| MIME sniffing                | `X-Content-Type-Options: nosniff`.                                                                     |
| Referência e permissões      | `Referrer-Policy` e `Permissions-Policy`, restringindo câmera, microfone, geolocalização e pagamentos. |
| Isolamento entre origens     | `Cross-Origin-Opener-Policy` e `Cross-Origin-Resource-Policy`, ambos com `same-origin`.                |
| HTTPS                        | HSTS configurado no ambiente Vercel.                                                                   |
| Código e dependências        | Betterleaks, Semgrep, ESLint com regras de segurança e `pnpm audit`.                                   |

Os cabeçalhos estão configurados em `vercel.json` e `nginx.conf`, respeitando as diferenças entre os dois ambientes. Essas medidas reduzem riscos, mas não substituem auditorias completas de segurança.

### 🔎 SEO e páginas complementares

O layout compartilhado centraliza título, descrição, metadados, favicons e canonical. A integração de sitemap gera os arquivos no build, e o `robots.txt` referencia o sitemap do domínio publicado. A Vercel está configurada para URLs sem barra final.

| Rota              | Finalidade                                                                  |
| ----------------- | --------------------------------------------------------------------------- |
| `/`               | Landing page principal.                                                     |
| `/privacy-policy` | Política de Privacidade do projeto.                                         |
| `/terms-of-use`   | Termos de Uso e condições da demonstração.                                  |
| `404`             | Página personalizada para endereços não encontrados, com retorno ao início. |

## 🚀 Como rodar

**Requisitos:** Git, Node.js `>= 24.22.1` e [pnpm](https://pnpm.io/) `12.16.1` (versão declarada no projeto).

```bash
git clone https://github.com/DaviWebDev/ressoa-landing-page.git
cd ressoa-landing-page
pnpm install
pnpm dev
```

Acesse `http://localhost:4321`.

Para gerar e visualizar a versão de produção localmente:

```bash
pnpm build
pnpm preview
```

A variável `SITE_URL` define o domínio utilizado na geração de canonical e sitemap. Sem ela, a configuração utiliza `http://localhost:4321`.

```bash
# Bash / Git Bash
SITE_URL=https://ressoa-landing-page.vercel.app pnpm build
```

```powershell
# PowerShell
$env:SITE_URL = "https://ressoa-landing-page.vercel.app"
pnpm build
```

> [!NOTE]
> Para outro domínio, ajuste também o endereço do sitemap em `public/robots.txt` e as referências ao domínio nas páginas legais. Os hooks do Husky requerem Betterleaks e Semgrep disponíveis no PATH, além de Bash para o pre-commit. Docker não é necessário para executar o site diretamente com pnpm.

<details>
<summary><strong>🐳 Executar com Docker</strong></summary>

<br />

O `Dockerfile` possui estágios separados de desenvolvimento, build e produção. A imagem final utiliza Nginx para servir os arquivos estáticos, sem precisar de um processo Node.js em produção.

```bash
# Desenvolvimento com volumes e hot reload — porta 4321
docker compose up --build

# Produção com Nginx — porta 4322
pnpm docker:preview

# Encerrar o ambiente de produção
pnpm docker:stop-prod
```

O Nginx também configura compressão gzip, cache de assets, revalidação de HTML, cabeçalhos de segurança e tratamento de erros 404.

</details>

<details>
<summary><strong>Todos os scripts</strong></summary>

<br />

| Comando                 | O que faz                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `pnpm dev`              | Inicia o servidor de desenvolvimento.                                                                                    |
| `pnpm build`            | Gera os arquivos estáticos em `dist/`.                                                                                   |
| `pnpm preview`          | Serve o build localmente.                                                                                                |
| `pnpm astro check`      | Executa a análise e verificação de tipos do Astro.                                                                       |
| `pnpm lint`             | Executa ESLint com tolerância zero a avisos.                                                                             |
| `pnpm format`           | Formata os tipos de arquivo definidos no script.                                                                         |
| `pnpm format:check`     | Verifica a formatação sem alterar arquivos.                                                                              |
| `pnpm audit`            | Audita dependências; nível mínimo de falha alto.                                                                         |
| `pnpm audit:prod`       | Audita somente dependências de produção.                                                                                 |
| `pnpm security:scan`    | Executa Semgrep em `src/`, com severidade WARNING e falha em achados correspondentes. Requer Semgrep e shell compatível. |
| `pnpm PW:test-partial`  | Executa os testes E2E.                                                                                                   |
| `pnpm PW:test-full`     | Executa os testes e abre o relatório se a execução for bem-sucedida.                                                     |
| `pnpm PW:report`        | Abre o relatório HTML existente.                                                                                         |
| `pnpm PW:ui`            | Abre o modo interativo do Playwright.                                                                                    |
| `pnpm docker:no-cache`  | Reconstrói a imagem de desenvolvimento sem cache.                                                                        |
| `pnpm docker:preview`   | Sobe o ambiente de produção com Nginx na porta 4322.                                                                     |
| `pnpm docker:rebuild`   | Reconstrói e sobe o ambiente de produção sem cache.                                                                      |
| `pnpm docker:stop-prod` | Encerra o ambiente Docker de produção.                                                                                   |
| `pnpm prepare`          | Configura os hooks do Husky.                                                                                             |

</details>

## ✅ Qualidade e CI

O projeto utiliza verificações locais e workflows no GitHub Actions para identificar problemas antes e depois da integração de alterações à branch `main`.

### Verificações locais

| Etapa      | Verificações                                                                                                   |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| Pre-commit | lint-staged, Betterleaks nos arquivos staged e Semgrep sobre os arquivos de `src/` selecionados para o commit. |
| Pre-push   | `astro check`, ESLint e Betterleaks no histórico Git.                                                          |

### Integração contínua

O workflow [CI](.github/workflows/ci.yml) é executado em pull requests e pushes na `main`.

1. 🧹 **Workflows:** validação dos arquivos do GitHub Actions com actionlint.
2. 🕵️ **Segredos:** análise do histórico do repositório com Betterleaks.
3. 🔒 **Análise estática:** Semgrep sobre o código-fonte quando `src/` está presente.
4. 📦 **Dependências e código:** instalação com lockfile congelado, ESLint, auditoria das dependências de produção, `astro check` e build.
5. 🧪 **E2E:** execução dos testes Playwright com uma matriz de navegadores adequada ao evento.

| Ambiente       | Chromium | Firefox | WebKit | Mobile Chrome (Pixel 7) |
| -------------- | :------: | :-----: | :----: | :---------------------: |
| Pull request   |    ✅    |    —    |   —    |           ✅            |
| Push na `main` |    ✅    |   ✅    |   ✅   |           ✅            |

Os relatórios e resultados de teste são disponibilizados como artefatos do GitHub Actions por 14 dias.

### Testes E2E

A suíte atual, em `tests/header.spec.ts`, cobre a resolução das âncoras internas, a configuração de rolagem suave e seu deslocamento, a abertura e o fechamento do menu móvel, atributos de acessibilidade, estado `inert` e bloqueio da rolagem enquanto o menu está aberto.

```bash
pnpm exec playwright install
pnpm PW:test-partial
```

O Playwright gera o build e inicia o preview na porta `4322` automaticamente quando necessário. Não é preciso subir o Docker para rodar os testes. Evite deixar outro servidor nessa porta para não testar uma versão diferente do código.

### 🚦 Lighthouse CI

O workflow [Lighthouse CI](.github/workflows/lighthouse.yml) é executado em pushes na `main`, auditando os arquivos estáticos gerados em `dist/` quando há HTML disponível.

| Categoria      | Limite mínimo configurado |
| -------------- | :-----------------------: |
| Performance    |          90/100           |
| Acessibilidade |          90/100           |
| SEO            |          90/100           |

As três categorias possuem asserções com nível `error` em [`lighthouserc.json`](lighthouserc.json). Uma pontuação agregada abaixo do limite configurado faz a auditoria falhar.

A badge **Lighthouse 90+** representa essa meta automatizada, não uma medição permanente em todos os dispositivos ou condições de rede. O resultado mais recente pode ser consultado nas [execuções do workflow](https://github.com/DaviWebDev/ressoa-landing-page/actions/workflows/lighthouse.yml).

### Atualização de dependências

O Dependabot está configurado para verificar semanalmente dependências npm, imagens Docker e GitHub Actions. Atualizações patch e minor são agrupadas, e um workflow habilita auto-merge por squash para pull requests elegíveis do bot, sujeito às condições de merge do repositório.

## 🗂️ Estrutura

<details>
<summary><strong>Ver organização do projeto</strong></summary>

<br />

```text
src/
├── assets/          # Fontes locais, logo e imagens responsivas
├── components/
│   ├── layout/      # Header e rodapé
│   ├── sections/    # Hero, Solutions, Showcase, Process, Faq e Contact
│   └── ui/          # Cards de soluções e navegação desktop/mobile
├── data/            # Dados tipados de soluções, processo, FAQ e rodapé
├── icons/           # Ícones SVG utilizados nos componentes
├── layout/          # Layout.astro: head, SEO, header e slot principal
├── pages/           # Home, privacidade, termos de uso e 404
├── scripts/         # header.ts e contact.ts
└── styles/          # global.css: tema, tokens e estilos globais

public/              # Favicons, manifesto e robots.txt
tests/              # Testes E2E do Playwright
.github/             # Workflows e configuração do Dependabot
.husky/              # Hooks de pre-commit e pre-push
astro.config.mjs     # Configuração do Astro, Vite, CSP e integrações
lighthouserc.json    # Asserções de qualidade do Lighthouse CI
playwright.config.ts # Projetos, servidor e execução dos testes E2E
vercel.json          # Cabeçalhos, cache e URLs na Vercel
Dockerfile           # Build multi-stage
nginx.conf           # Servidor estático de produção
```

</details>

## 👋 Autor e créditos

**Desenvolvimento front-end:** [DaviWebDev](https://github.com/DaviWebDev).

**Referência visual:** layout gerado com inteligência artificial no [Figma](https://www.figma.com/), utilizado como ponto de partida para a implementação.

Projeto desenvolvido para estudo e portfólio, com foco na tradução de layouts em código, performance, acessibilidade e boas práticas de engenharia front-end.

O repositório não possui uma licença explícita de distribuição do código. Recursos de terceiros permanecem sujeitos às condições de seus respectivos titulares.

---

<p align="center">
  <sub>RESSOA · Acústica que faz parte da arquitetura.</sub>
</p>
