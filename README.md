

# 🧪 Automação de Testes - Política de Privacidade

![Cypress Tests](https://github.com/ThamiresMarina/automacao-com-cypress-e-javascript/actions/workflows/ci.yml/badge.svg)

Projeto de automação de testes E2E para o site [Iterasys](https://iterasys.com/), desenvolvido com **Cypress** e **Cucumber (Gherkin)**, cobrindo os cenários de login e verificação do link de Política de Privacidade.

---

## 📋 Cenários Cobertos

### Feature: Login

| Cenário | Descrição |
|---|---|
| ✅ Realizar login com sucesso | Faz login com credenciais válidas, rola até o rodapé e clica em Política de Privacidade |
| 🐛 Usuário não autenticado acessa Política de Privacidade | Sem fazer login, rola até o rodapé e clica em Política de Privacidade |

> **Bug documentado:** O link "Política de Privacidade" possui `href="#"` e não redireciona para nenhuma página, apenas adiciona `#` na URL atual.

---

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) — framework de testes E2E
- [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) — integração com Gherkin/Cucumber
- [GitHub Actions](https://github.com/features/actions) — pipeline de CI/CD

---

## 📁 Estrutura do Projeto

```
├── cypress/
│   ├── e2e/
│   │   ├── login.feature       # Cenários em Gherkin
│   │   └── login.js            # Step definitions
│   ├── fixtures/
│   │   └── example.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .github/
│   └── workflows/
│       └── ci.yml              # Pipeline GitHub Actions
├── .gitignore
├── cypress.config.js
├── cypress.env.json            # ⚠️ NÃO subir para o repositório
├── package.json
└── README.md
```

---

## ⚙️ Pré-requisitos

- Node.js instalado
- npm instalado

---

## 🚀 Como Rodar Localmente

**1. Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Crie o arquivo de variáveis de ambiente:**

Crie o arquivo `cypress.env.json` na raiz do projeto:
```json
{
  "email": "seu-email@exemplo.com",
  "senha": "sua-senha"
}
```

> ⚠️ Este arquivo está no `.gitignore` e **nunca deve ser commitado**.

**4. Abra o Cypress:**
```bash
npx cypress open
```

**5. Ou rode em modo headless:**
```bash
npx cypress run --browser chrome
```

---

## 🔒 Variáveis de Ambiente

As credenciais são gerenciadas via variáveis de ambiente para não ficarem expostas no repositório.

| Variável | Descrição |
|---|---|
| `email` | E-mail do usuário de teste |
| `senha` | Senha do usuário de teste |

**Localmente:** configure no `cypress.env.json`

**Na pipeline:** configure como Secrets no GitHub:
`Settings → Secrets and variables → Actions → New repository secret`

---

## 🔄 Pipeline CI/CD

O projeto possui integração com **GitHub Actions**. Os testes são executados automaticamente a cada `push` ou `pull request` na branch `main`.

As evidências (screenshots e vídeos) são salvas como artefatos e ficam disponíveis para download na aba **Actions** do repositório.

---

## 📌 Observações

- O `cy.on('uncaught:exception', () => false)` é utilizado para ignorar erros do JavaScript da aplicação que não são relacionados aos cenários testados.
- O assert do link de Política de Privacidade documenta um **bug conhecido**: o link não redireciona para nenhuma página.