// articles.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
describe('Artigo', () => {
  it('Criar um novo artigo', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.login()
    
    // 
    cy.get('a[href$=editor]').click()
    cy.get('input[placeholder="Article title"]').type('Testing')
    cy.get('input[placeholder="What is this article about?"]').type('Automation')
    cy.get('form textarea').type('Automation tests')
    cy.get('input[placeholder="Enter tags"]').type('test');
    cy.get('button.btn-primary').contains('Publish article').click();

    // deve conter o texto igual ao título informado
    cy.get('h1').should('contain.text', 'Testing')
    /* ==== End Cypress Studio ==== */
  })
})