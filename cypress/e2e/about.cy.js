describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about')
  })
  it("Should contain the site header", () => {
    cy.get("h1")
      .should("contain", "Oblique Strategies")
  });
  it("Should contain the about statement", () => {
    cy.get(".about")
      .should("contain", "Oblique Strategies is a lightweight daily writing tool utilizing the prompts and principles of both the Oblique Strategies deck created by Brian Eno and the practice of Morning Pages from Julia Cameron's book the artists way. The goal is to create a place to focus on writing as a practice rather than a matter of output by focusing the user on daily writing goals and de-emphasizing the actual output of their writing.")
  });
  it("Should contain a design credit", () => {
    cy.get("p:last")
      .should("contain", "Design by Nicole Thayer")
  });
});
