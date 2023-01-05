import { getGreeting } from '../support/app.po';

describe('capitaltracker', () => {
    beforeEach(() => cy.visit('/'));
    it('should display welcome message', () => {
        getGreeting().contains('Ready to dive in?');
    });
});
