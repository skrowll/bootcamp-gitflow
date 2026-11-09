# Orion Bootcamp 2026 — GitFlow

Repositório de demonstração criado para a atividade de Git e GitFlow do Orion Bootcamp 2026, promovido pela Newrizon.

O objetivo é praticar o versionamento de código, a organização de branches, a padronização de commits e o fluxo de integração por meio de Pull Requests.

## Estrutura de branches

- **production:** versão estável do projeto.
- **stage:** ambiente de homologação e validação das alterações.
- **develop:** integração das funcionalidades em desenvolvimento.
- **feature/*:** desenvolvimento de novas funcionalidades.

## Fluxo de trabalho

As funcionalidades são desenvolvidas em branches `feature/*` e integradas à `develop` por meio de Pull Requests.

Após a integração, as alterações são promovidas para `stage` e, posteriormente, para `production`.

Os PRs passam por revisão e aprovação antes de serem integrados, garantindo um fluxo de desenvolvimento controlado.