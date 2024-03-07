// Function to test for the background/body visible or not
function backgroundBodyVisible() {
  it('The body/background is visible', () => {
    cy.get('body').should('be.visible')
  })
}

describe('Project: Good Cheap Fast', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/good-cheap-fast')
  })

  it('Opens the home page', () => { 

  })

  it('The page is visible', () => {
    backgroundBodyVisible()
  })

  context('Body', () => {
    context('Background', () => {
      it('The background is visible', () => {
        backgroundBodyVisible()
      })

      it('The background color is correct', () => {
        cy.get('body').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      })
    })

    context('Body Text', () => {
      it('The body text is center aligned', () => {
        cy.get('body').should('have.css', 'align-items', 'center')
      })

      context('H2 Heading', () => {
        it('The heading is visible', () => {
          cy.get('body h2').should('be.visible')
        })

        it('The text is correct', () => {
          cy.get('body h2').should('have.text', 'How do you want your project to be?')
        })

        it('The color of the heading is black', () => {
          cy.get('body h2').should('have.css', 'color', 'rgb(0, 0, 0)')
        })
      })

      context('Toggle Buttons', () => {
        it('The buttons are visible', () => {
          cy.get('.toggle-container').should('be.visible')
        })

        context('Good', () => {
          context('Good text', () => { 
            it('The good text is visible', () => {
              cy.get('.toggle-container span').contains('Good').should('be.visible')
            })

            it('The good text is correct', () => {
              cy.get('.toggle-container span').contains('Good').should('be.visible').should('have.text', 'Good')
            })
          })

          context('Good Button', () => {
            it('The good button is clickable', () => {
              cy.get('#good').check({ force: true }).should('be.checked');
              cy.get('#good').uncheck({ force: true }).should('not.be.checked');
            })
          })
        })

        context('Cheap', () => {
          context('Cheap text', () => { 
            it('The cheap text is visible', () => {
              cy.get('.toggle-container span').contains('Cheap').should('be.visible')
            })

            it('The cheap text is correct', () => {
              cy.get('.toggle-container span').contains('Cheap').should('be.visible').should('have.text', 'Cheap')
            })
          })
          
          context('Cheap Button', () => {
            it('The cheap button is clickable', () => {
              cy.get('#cheap').check({ force: true }).should('be.checked');
              cy.get('#cheap').uncheck({ force: true }).should('not.be.checked');
            })
          })
        })

        context('Fast', () => {
          context('Fast text', () => { 
            it('The fast text is visible', () => {
              cy.get('.toggle-container span').contains('Fast').should('be.visible')
            })

            it('The fast text is correct', () => {
              cy.get('.toggle-container span').contains('Fast').should('be.visible').should('have.text', 'Fast')
            })
          })
          
          context('Fast Button', () => {
            it('The fast button is clickable', () => {
              cy.get('#fast').check({ force: true }).should('be.checked');
              cy.get('#fast').uncheck({ force: true }).should('not.be.checked');
            })
          })
        })
      })
    })
  })
})


  // Button	      Values							
  // Good	    T	T	T	T	F	F	F	F
  // Cheap	  T	T	F	F	T	T	F	F
  // Fast	    T	F	T	F	T	F	T	F

  // Output   F T T T T T T F     // F means all three not on, T means atleast 1 is on
