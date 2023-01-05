describe('capitaltracker', () => {
    beforeEach(() => cy.visit('/'));
    it('should display welcome message', () => {
        cy.get('div[data-testid="heading"]').should('contain', 'Shared');
    });
});
