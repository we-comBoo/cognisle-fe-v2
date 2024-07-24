describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('/login')

    // Find a link with an href attribute containing "about" and click it
    cy.contains('LOGIN').should('exist')
  })
})
