import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('que acesso o site da Iterasys', () => {
  cy.on('uncaught:exception', () => false)
  cy.visit('https://iterasys.com/')
  cy.get('#user-menu-toggle').click()
})

Given('que acesso o site da Iterasys sem fazer login', () => {
  cy.on('uncaught:exception', () => false)
  cy.visit('https://iterasys.com/')
})

When('preencho minhas credenciais', () => {
  cy.get('[name="username"]').should('be.visible').type(Cypress.env('email'))
  cy.get('[name="password"]').type(Cypress.env('senha'))
})

When('clico em entrar', () => {
  cy.get('#loginbtn').click()
})

When('rolo a página até o rodapé', () => {
  cy.scrollTo('bottom')
})

When('clico em Política de Privacidade', () => {
  cy.get('.footer-privacy-policy').click()
})

Then('o link não deve redirecionar para outra página', () => {
  // BUG conhecido: href="#" apenas adiciona # na URL
  cy.url().should('include', '#')
})