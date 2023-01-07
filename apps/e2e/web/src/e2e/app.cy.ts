describe('capitaltracker', () => {
    beforeEach(() => cy.visit('/', { timeout: 300000 }));
    it('should display welcome message', () => {
        cy.get('h1[data-testid="heading"]').should('contain', 'Welcome to Solito.');
    });
});
