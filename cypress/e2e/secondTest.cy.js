describe('shows the first side length', () => {
    it('passes', () => {
        // cy.visit('https://example.cypress.io')
        cy.visit('http://localhost:3000/');

        cy.get('[data-testid="side1-inc"]')
            .should('exist')
            .click()
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


        cy.get('[data-testid="triangle-perimeter"]')
            .should('exist')
            .should('have.text', '12')

        cy.get('[data-testid="triangle-angles"]')
            .should('exist')
            .should('have.text', '60°,60°,60°')
    });
    // it('Does not do much!', () => {
    //  
    // })
})