1. Baixar e Abrir o Cypress em modo interativo (interface gráfica)
->npm install cypress --save-dev
->npx cypress open


Isso abrirá a interface do Cypress, permitindo executar os testes manualmente e visualizar cada etapa.

2. Executar em modo headless (linha de comando)
->npx cypress run


Esse comando roda todos os testes automaticamente no modo headless, gerando logs e vídeos (se configurado).

📁 Estrutura Geral

cypress/e2e → Arquivos dos testes

cypress/fixtures → Massa de dados reutilizável

cypress/support → Commands reutilizáveis e configs internas

cypress.config.js → Configurações principais do Cypress

📝 Versão Utilizada

O projeto foi desenvolvido utilizando:

Cypress 15.4.0 (versão recomendada na atividade)