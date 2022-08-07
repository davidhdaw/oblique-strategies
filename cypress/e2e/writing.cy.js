describe('Writing Page', () => {
  before(() => {
    cy.visit('/')
    cy.get('input:first').type('test2@test.com')
    cy.get('input[name = password]').type('testtest')
    cy.get('button:first').click()
  })
  it("Should contain the site header", () => {
    cy.get("h1")
      .should("contain", "Oblique Strategies")
  });
  it("Should contain a place to write", () => {
    cy.get("textarea")
      .should("exist")
  });
  it("Should contain a strategyCard", () => {
    cy.get(".strategy")
      .should("exist")
  });
  it("Should get a new strategy call on click", () => {
    cy.intercept('GET', "https://arcane-hollows-12884.herokuapp.com/https://serene-depths-85876.herokuapp.com/v1", {
      statusCode: 201,
      fixture: "testCard.json"
    })
    cy.get('.clickable-area').click()
    cy.get(".strategy")
      .should("contain", "faked up")
  });
  it("Should show an error when the strategy call fails", () => {
    cy.intercept('GET', "https://arcane-hollows-12884.herokuapp.com/https://serene-depths-85876.herokuapp.com/v1", {
      statusCode: 502,
      fixture: "logs.json"
    })
    cy.get('.clickable-area').click()
    cy.get(".strategy")
      .should("contain", "Uh-Oh")
  });
  it("Should keep track of the wordcount as you write", () => {
    cy.get(".word-count")
      .should("contain", "0/750")
    cy.get("textarea")
      .type(`"He (David Byrne)'s a genuine eccentric," says Eno. "He's always been exactly like that, and I've seen him remain like that in quite extreme situations. For instance, we were mugged together once in New York. It was quite frightening; we were mugged by 14 people. My enduring memory is of David being dragged off into the bushes, saying  'Uh-oh!' That's absolutely true; it was like a cartoon scene." - Brian Eno`)
    cy.get(".word-count")
      .should("contain", "71/750")
  });
  it("Should contain a submit button", () => {
    cy.get(".submit-button")
      .should("exist")
  });
  it("Should give an error message if you try to submit before word count goal is reached", () => {
    cy.get('.submit-error').should("not.exist")
    cy.get(".submit-button").click()
    cy.get('.submit-error').should("exist")
  });
  it("Should take you to the logs page when you successfully submit something", () => {
    cy.get("textarea")
    .type(`"He (David Byrne)'s a genuine eccentric," says Eno. "He's always been exactly like that, and I've seen him remain like that in quite extreme situations. For instance, we were mugged together once in New York. It was quite frightening; we were mugged by 14 people. My enduring memory is of David being dragged off into the bushes, saying  'Uh-oh!' That's absolutely true; it was like a cartoon scene." - Brian Eno`)
    .type(`"He (David Byrne)'s a genuine eccentric," says Eno. "He's always been exactly like that, and I've seen him remain like that in quite extreme situations. For instance, we were mugged together once in New York. It was quite frightening; we were mugged by 14 people. My enduring memory is of David being dragged off into the bushes, saying  'Uh-oh!' That's absolutely true; it was like a cartoon scene." - Brian Eno`)
    .type(`"He (David Byrne)'s a genuine eccentric," says Eno. "He's always been exactly like that, and I've seen him remain like that in quite extreme situations. For instance, we were mugged together once in New York. It was quite frightening; we were mugged by 14 people. My enduring memory is of David being dragged off into the bushes, saying  'Uh-oh!' That's absolutely true; it was like a cartoon scene." - Brian Eno`)
    .type(`"He (David Byrne)'s a genuine eccentric," says Eno. "He's always been exactly like that, and I've seen him remain like that in quite extreme situations. For instance, we were mugged together once in New York. It was quite frightening; we were mugged by 14 people. My enduring memory is of David being dragged off into the bushes, saying  'Uh-oh!' That's absolutely true; it was like a cartoon scene." - Brian Eno`)
    .type(`"He (David Byrne)'s a genuine eccentric," says Eno. "He's always been exactly like that, and I've seen him remain like that in quite extreme situations. For instance, we were mugged together once in New York. It was quite frightening; we were mugged by 14 people. My enduring memory is of David being dragged off into the bushes, saying  'Uh-oh!' That's absolutely true; it was like a cartoon scene." - Brian Eno`)
    .type(`"He (David Byrne)'s a genuine eccentric," says Eno. "He's always been exactly like that, and I've seen him remain like that in quite extreme situations. For instance, we were mugged together once in New York. It was quite frightening; we were mugged by 14 people. My enduring memory is of David being dragged off into the bushes, saying  'Uh-oh!' That's absolutely true; it was like a cartoon scene." - Brian Eno`)
    .type(`"He (David Byrne)'s a genuine eccentric," says Eno. "He's always been exactly like that, and I've seen him remain like that in quite extreme situations. For instance, we were mugged together once in New York. It was quite frightening; we were mugged by 14 people. My enduring memory is of David being dragged off into the bushes, saying  'Uh-oh!' That's absolutely true; it was like a cartoon scene." - Brian Eno`)
    .type(`"He (David Byrne)'s a genuine eccentric," says Eno. "He's always been exactly like that, and I've seen him remain like that in quite extreme situations. For instance, we were mugged together once in New York. It was quite frightening; we were mugged by 14 people. My enduring memory is of David being dragged off into the bushes, saying  'Uh-oh!' That's absolutely true; it was like a cartoon scene." - Brian Eno`)
    .type(`"He (David Byrne)'s a genuine eccentric," says Eno. "He's always been exactly like that, and I've seen him remain like that in quite extreme situations. For instance, we were mugged together once in New York. It was quite frightening; we were mugged by 14 people. My enduring memory is of David being dragged off into the bushes, saying  'Uh-oh!' That's absolutely true; it was like a cartoon scene." - Brian Eno`)
    .type(`"He (David Byrne)'s a genuine eccentric," says Eno. "He's always been exactly like that, and I've seen him remain like that in quite extreme situations. For instance, we were mugged together once in New York. It was quite frightening; we were mugged by 14 people. My enduring memory is of David being dragged off into the bushes, saying  'Uh-oh!' That's absolutely true; it was like a cartoon scene." - Brian Eno`)
    cy.get(".submit-button").click()
    cy.url().should("include", "/logs")
  });
})

//should redirect you to logs if the submit actually goes through.

