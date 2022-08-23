describe('empty spec', () => {
  it('visit and render Header', () => {
    cy.visit('http://127.0.0.1:1234');
    cy.contains('Home');
  })
})
