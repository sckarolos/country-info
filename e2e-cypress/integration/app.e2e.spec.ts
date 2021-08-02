context('End to end', () => {

    describe('Home Page', () => {
        before(() => {
            cy.visit('/');
        });

        it('Should display regions dropdown', () => {s
            cy.get('[data-cy=region]').should('be.visible');
            cy.findByRole('option', { name: 'Europe' }).should('be.visible');
            cy.findByRole('option', { name: 'Asia' }).should('be.visible');
        });

        describe("Countries in Europe", () => {
            it("Is possible to show details for 'Germany'", () => {
                cy.get('[data-cy=region]').select('Europe');
                cy.get('[data-cy=country]').find('option')
                    .should('be.visible')
                    .should('have.length.to.be.greaterThan', 50);
                cy.get('[data-cy=country]').select('Germany');
                cy.get('app-country-details').should('be.visible');
                cy.get('[data-cy=countryCapital]').should('have.text', 'Berlin');
            });

            it("Is possible to show details for 'Greece'", () => {
                cy.get('[data-cy=country]').select('Greece');
                cy.get('app-country-details').should('be.visible');
                cy.get('[data-cy=countryCapital]').should('have.text', 'Athens');
            });
        });
    });
});
