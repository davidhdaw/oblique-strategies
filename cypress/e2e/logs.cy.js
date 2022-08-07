describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

// should display a list of all the loaded logs

//should display a date and time
//should display a first line
//should display a list of the strategies shown during writing


//should display a newly loaded log at the top of your list

//should take you to a


//here's what a stub for this would look like if stubbing Firebase actually worked with Cypress
// cy.intercept('GET', "https://www.a-hypothetical-firebase-api-call-url-that-would-stay-consistent-and-not-check-your-auth-credentials.com/i-hate-cypress-now", {
//   statusCode: 201,
//   fixture: "logs.json"
// })