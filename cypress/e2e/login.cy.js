describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("Should contain instructions to log in", () => {
    cy.get("h3")
      .should("contain", "Sign In To Continue")
  });
  it("Should contain the log in form", () => {
    cy.get('input')
    .should('have.length', 2)
    cy.get('button:first')
    .should('contain', 'Sign In With E-Mail')
  });
  it("Should show a message for a failed log in", () => {
    cy.get('.login').should('exist')
    cy.get('input:first').type('jimothytestington@test.com')
    cy.get('input[name = password]').type('testtest.TEST?')
    cy.get('button:first').click()
    cy.get('.login').should('contain', 'Failed to Log In.')
  });
  it("Should remove log in after logging in", () => {
    cy.get('.login').should('exist')
    cy.get('input:first').type('test2@test.com')
    cy.get('input[name = password]').type('testtest')
    cy.get('button:first').click()
    cy.get('.login').should('not.exist')
  });
  it("Should ask to log in again after logging out", () => {
    cy.get('input:first').type('test2@test.com')
    cy.get('input[name = password]').type('testtest')
    cy.get('button:first').click()
    cy.get('.sign-out').click()
    cy.get('.login').should('exist')
  });

});