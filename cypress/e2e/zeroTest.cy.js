describe('checks whether buttons are working and triangle side lengths are valid', () => {
    it('passes', () => {
        // cy.visit('https://example.cypress.io')
        cy.visit('http://localhost:3000/');

        cy.get('[data-testid="side1-inc"]')
            .should('exist')
            .click()
            .click()

        cy.get('[data-testid="side1-dec"]')
            .should('exist')
            .click()
            .click()


        cy.get('[data-testid="side2-inc"]')
            .should('exist')
            .click()
            .click()
            .click()

        cy.get('[data-testid="side2-dec"]')
            .should('exist')
            .click()


        cy.get('[data-testid="side3-inc"]')
            .should('exist')
            .click()
            .click()


        cy.get('[data-testid="side3-dec"]')
            .should('exist')
            .click()
            .click()


        cy.get('[data-testid="side1-length"]')
            .should('exist')
            .should('have.text', 'Side 1: 1')

        cy.get('[data-testid="side2-length"]')
            .should('exist')
            .should('have.text', 'Side 2: 3')

        cy.get('[data-testid="side3-length"]')
            .should('exist')
            .should('have.text', 'Side 3: 1')

        cy.get('[data-testid="validity-check"]')
            .should('exist')
            .should('have.text', "Length of any side can't be greater than sum of the other two !")
    });
    // it('Does not do much!', () => {
    //  
    // })
})