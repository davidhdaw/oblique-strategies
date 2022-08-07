describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about')
    cy.get('input:first').type('test2@test.com')
    cy.get('input[name = password]').type('testtest')
    cy.get('button:first').click()
  })
  it("Should display an about page", () => {

  })
});

  // it('Adds document to test_hello_world collection of Firestore', () => {
  //   cy.callFirestore('add', 'test_hello_world', { some: 'value' });
  // });

  //test2@test.com
  //testtest
