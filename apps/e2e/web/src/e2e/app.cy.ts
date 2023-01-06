describe('capitaltracker', () => {
    beforeEach(() => cy.visit('/'));
    it('should display welcome message', () => {
        cy.get('h1[data-testid="heading"]').should('contain', 'Welcome to Solito.');
    });
});
