describe('empty spec', () => {
  before(() => {
    cy.visit('/')
    cy.get('input:first').type('test2@test.com')
    cy.get('input[name = password]').type('testtest')
    cy.get('button:first').click()
    cy.get(".log-nav-link").click()
  })
  it("Should contain the site header", () => {
    cy.get("h1")
      .should("contain", "Oblique Strategies")
  });
  it("Should contain a user's logs", () => {
    cy.get(".log:first h2")
      .should("contain", "08/07/2022 15:23:30")
    cy.get(".log:first h3:first")
      .should("contain", "First Line:")
    cy.get('.log:first p')
      .should("contain", `""He (David Byrne)'s a genuine eccentric," says Eno..."`)
    cy.get(".log:first h3:last")
      .should("contain", "Strategies:")
      cy.get(".log:first li:first")
      .should("contain", "this is a faked up card for testing purposes")
  });
  it("Should take you to a details page on click", () => {
    cy.get(".log:first a:first").click()
    cy.url().should('contain', '1659911010398')
  });
  it("Should show you the details of that entry on its page", () => {
    cy.get(".entry-record").should('exist')
    cy.get(".writing-info").should('exist')
    cy.get(".writing-info h2").should('contain', '08/07/2022')
    cy.get(".writing-info h3").should('contain', 'Entry:')
    cy.get(".writing-info p").should('contain', "He's always been exactly like that, and I've seen him remain like that in quite extreme situations")
    cy.get(".strategy-list").should('exist')
    cy.get(".strategy-list h4").should('contain', 'Strategies:')
    cy.get(".strategy-list li").should('contain', 'this is a faked up card for testing purposes')
  });
  it("Should show an error message when you try to go to an invalid entry", () => {
    cy.visit('/99999999')
    cy.get('.error-message').should('contain', "Can't find that one partner")
  });
})

//here's what a stub for this would look like if stubbing Firebase actually worked with Cypress
// cy.intercept('GET', "https://www.a-hypothetical-firebase-api-call-url-that-would-stay-consistent-and-not-check-your-auth-credentials.com/i-hate-cypress-now", {
//   statusCode: 201,
//   fixture: "logs.json"
// })