/// <reference types="cypress" />

describe('Curtir', () => {
    it('Curte o primeiro artigo encontrado', () => {
        cy.login()

        cy.get('.nav-pills a.nav-link')
            .contains('Global Feed')
            .click()

        cy.get('.col-md-9 .article-preview').should('have.length', 10)

        cy.get('.col-md-9 .article-meta .pull-xs-right .btn-outline-primary')
            .first()
            .click()
    })
})