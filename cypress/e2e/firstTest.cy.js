describe('shows the first side length', () => {
  it('passes ability to calculate according to side lengths entered', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="side1-length"]')
      .should('exist')
      .should('have.text', 'Side 1: 1')

    cy.get('[data-testid="side1-inc"]')
      .should('exist')
      .click()
      .click()

    cy.get('[data-testid="side2-inc"]')
      .should('exist')
      .click()
      .click()
      .click()

    cy.get('[data-testid="side3-inc"]')
      .should('exist')
      .click()
      .click()
      .click()
      .click()

    cy.get('[data-testid="triangle-area"]')
      .should('exist')
      .should('have.text', '6')

    cy.get('[data-testid="triangle-perimeter"]')
      .should('exist')
      .should('have.text', '12')
  });
  // it('Does not do much!', () => {
  //  
  // })
})