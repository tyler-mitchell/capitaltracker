describe('capitaltracker', () => {
    beforeEach(() => cy.visit('/', { timeout: 30000000000000 }));
    it('should display welcome message', () => {
        cy.get('h1[data-testid="heading"]', { timeout: 30000000000000 }).should(
            'contain',
            'Welcome to Solito.'
        );
    });
});
