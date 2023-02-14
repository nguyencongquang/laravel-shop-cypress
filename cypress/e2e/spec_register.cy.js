describe('template spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env('host')+'register')
    var seconds = new Date().getTime() / 1000;
    cy.get('#name').type("name"+seconds)
    cy.get('#email').type(seconds+"@test.com")
    cy.get('#password').type("password")
    cy.get('#password_confirmation').type("password")
    cy.get('#formLogin').submit()
    cy.get(".p-6").contains("You're logged in!");
  })
})