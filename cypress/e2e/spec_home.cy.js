describe('home page', () => {
  it('passes', () => {
    cy.visit(Cypress.env('host'))
  })
})