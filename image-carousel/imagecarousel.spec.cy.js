function bodyVisible() {
  it('Body Visibility', () => {
    cy.get('body').should('be.visible')
  })
}

// Start with Testing for the web applications
describe('Image Carousel', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/image-carousel/index.html')
  })

  it('Opens the Home Page', () => {

  })

  it('The body is visible', () => {
    bodyVisible()
  })

  context('Buttons', () => {
    context('Previous Button', () => {
      it('The previous button is visible', () => {
        cy.get('.btn#left').should('be.visible')
      })

      it('The previous button text is visible and correct', () => {
        cy.get('.btn#left').should('be.visible').should('have.text', 'Prev')
      })

      it('The previous button text has correct color', () => {
        cy.get('.btn#left').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
      })

      it('The background color of the button is correct', () => {
        cy.get('.btn#left').should('be.visible').should('have.css', 'background-color', 'rgb(102, 51, 153)')
      })

      it('The button is clickable', () => {
        cy.get('.btn#left').should('be.visible').click()
      })
    })

    context('Next Button', () => {
      it('The previous button is visible', () => {
        cy.get('.btn#right').should('be.visible')
      })

      it('The previous button text is visible and correct', () => {
        cy.get('.btn#right').should('be.visible').should('have.text', 'Next')
      })

      it('The previous button text has correct color', () => {
        cy.get('.btn#right').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
      })

      it('The background color of the button is correct', () => {
        cy.get('.btn#right').should('be.visible').should('have.css', 'background-color', 'rgb(102, 51, 153)')
      })

      it('The button is clickable', () => {
        cy.get('.btn#right').should('be.visible').click()
      })

    })
  })

})
