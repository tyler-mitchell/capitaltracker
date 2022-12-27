describe('pages: Home component', () => {
    beforeEach(() => cy.visit('/iframe.html?id=home--primary'));

    it('should render the component', () => {
        cy.get('h1').should('contain', 'Welcome to Home!');
    });
});
