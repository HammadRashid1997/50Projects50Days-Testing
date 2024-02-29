describe('Project: Button Ripple Effect', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/button-ripple-effect/')
  })

  it('Opens the homepage', () => {

  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    context('Background', () => {
      it('The background is visible', () => {
        cy.get('body').should('be.visible')
      })

      it('The background color is visible and correct', () => {
        cy.get('body').should('be.visible').should('have.css', 'background-color', 'rgb(0, 0, 0)')
      })

      context('Button', () => {
        it('The button is visible', () => {
          cy.get('.ripple').should('be.visible')
        })

        it('The button has the correct color', () => {
          cy.get('.ripple').should('be.visible').should('have.css', 'background-color', 'rgb(128, 0, 128)')
        })

        it('The button has the correct border color', () => {
          cy.get('.ripple').should('be.visible').should('have.css', 'border-color', 'rgb(128, 0, 128)')
        })

        context('Click Me Text', () => {
          it('The text is visible', () => {
            cy.get('.ripple').should('be.visible').should('have.text', 'Click Me');
          })

          it('The text color is white', () => {
            cy.get('.ripple').should('have.text', 'Click Me').should('have.css', 'color', 'rgb(255, 255, 255)')
          })
        })

        it('The button is clickable', () => {
          cy.get('.ripple').click()
        })

        // checks that when button is clicked, the circle appears and after some seconds, it disappears
        it('The button gives a ripple effect when clicked', () => {
          cy.get('.ripple').click()
          cy.get('.circle').should('exist')
          cy.wait(500)
          cy.get('.circle').should('not.exist')
        })
      })
    })
  })
})
