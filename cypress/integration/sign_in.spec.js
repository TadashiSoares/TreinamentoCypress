/// <reference types="cypress"/>

describe('Login', () => {
    it('Efetuar login com usuário e senha válidos', () => {
        // acessar o site
        cy.visit('/')

        // clicar no botão sign in
        cy.get('.nav-link')
            .contains('Sign in')
            .click()

        // informar o usuário e senha
        const user = Cypress.env('user').email
        const pass = Cypress.env('user').password

        cy.get('input[type=email]').type(user)
        cy.get('input[type=password]').type(pass)

        // clicar no botão entrar
        cy.get('button.btn-primary').click()

        // verificar se você foi autenticado
        cy.get('.nav-pills a.nav-link')
            .should('have.length', 2)

        cy.get('.nav-pills a.nav-link')
            .first()
            .should('contain.text', 'Your Feed')
    })
})