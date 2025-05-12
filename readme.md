# Projeto de Testes Automatizados com Playwright

Este projeto contém testes automatizados para o site **Casas Bahia**, utilizando o framework **Playwright**. Ele foi desenvolvido para validar funcionalidades como navegação, adição de produtos ao carrinho e finalização de compras.

---

## **Estrutura do Projeto**

```plaint
gcb-testes-web-playwright/
├── e2e/                     # Testes end-to-end
│   ├── Cart.spec.js         # Testes relacionados ao carrinho
│   ├── Checkout.spec.js     # Testes relacionados ao checkout
├── support/                 # Suporte para os testes
│   ├── elements/            # Seletores de elementos
│   │   ├── cart.Elements.js
│   │   ├── checkout.Elements.js
│   ├── pages/               # Classes de páginas
│   │   ├── cartPage.js
│   │   ├── checkoutPage.js
│   │   ├── searchPage.js
├── fixtures/                # Dados de teste
│   ├── user.json
├── [playwright.config.js](http://_vscodecontentref_/0)     # Configuração do Playwright
├── [package.json](http://_vscodecontentref_/1)             # Dependências do projeto
├── .env                     # Variáveis de ambiente
```
## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão **16.x** ou superior)
- Navegadores instalados com o Playwright:

```bash
npx playwright install
```

Assumimos que você possui NodeJS instalado (versão 16.x ou superior)

## Abaixo segue alguns comandos a serem utilizados com o projeto para execução:
Navegadores: Chromium (Chrome/Edge), Firefox, WebKit (Safari)
Ambientes: desktop e mobile
### Para executar em modo headless
```
npx playwright test
```
### Executar testes específicos (modo visual/headed) 
executar no ambiente desktop
```
npx playwright test --project="desktop chromium" --headed nomeArquivo.spec.js
```
executar no ambiente mobile
```
npx playwright test --project="mobile chromium" --headed nomeArquivo.spec.js
```
### Executar testes no Modo interativo (UI): 
```
npx playwright test --ui
```

### Geração de relatório HTML:
```
npx playwright show-report
```

### Debug
```
npx playwright test --project="mobile chromium" nomeArquivo.spec.js --debug
```
