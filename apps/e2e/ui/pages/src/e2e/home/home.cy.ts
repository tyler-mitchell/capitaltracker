describe('pages: Home component', () => {
    beforeEach(() => cy.visit('/iframe.html?id=home--primary'));

    it('should render the home component', () => {
        cy.get('h2').should('contain', 'Ready to dive in?');
    });
});
