/// <reference types="cypress" />

describe('Comentário', () => {
    it('Acessa o primeiro artigo e faz um comentário', () => {
        cy.login()

        cy.get('.nav-pills a.nav-link')
            .contains('Global Feed')
            .click()

        cy.get('.col-md-9 .article-preview')
            .should('have.length', 10)
            .first()
            .click()

        cy.get('.card-block .form-control').type('Automation testing')

        cy.get('.card-footer .btn-primary').click()
    })
})