describe('pages: UiPages component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uipages--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to UiPages!');
    });
});
