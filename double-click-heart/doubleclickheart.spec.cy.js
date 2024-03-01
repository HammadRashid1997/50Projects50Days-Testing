// Function to check the body/background is visible
function backgroundBodyVisible() {
  it('Body/Background is visible', () => {
    cy.get('body').should('be.visible')
  })
}

function checkColorCoding() {
  it('Checks for RGB or RGBA background color', () => {
    cy.get('body').then(($body) => {
      const computedStyle = window.getComputedStyle($body[0])
      const backgroundColor = computedStyle.backgroundColor
      expect(backgroundColor).to.match(/rgba?\(\d+,\s*\d+,\s*\d+(,\s*\d*\.?\d+)?\)/)
    })
  })
}

describe('Project: Double Click Heart', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/double-click-heart/')
  })

  it('Opens the home page', () => {

  })

  it('Screen is visible', () => {
    backgroundBodyVisible();
  })

  context('Body', () => {
    context('Background', () => {
      it('The background is visible', () => {
        backgroundBodyVisible();
      })

      it('The background color is correct and is visible', () => {
        cy.get('body').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)').should('be.visible')
      })
    })

    context('Content', () => {
      context('Heading Text', () => {
        context('Heading h3', () => {
          it('The heading text is visible', () => {
            cy.get('body h3').should('be.visible')
          })
  
          it('The text is visible except the heart icon', () => {
            cy.contains('h3', 'Double click on the image to').should('contain', 'Double click on the image to').and('contain', 'it')
          })
          
          context('Heart Icon', () => {
            it('The heart icon is visible', () => {
              cy.get('h3 i').should('be.visible')
            })
          })
        })
        
        context('Small heading text', () => {
          it('The small heading text is visible', () => {
            cy.get('body small').should('be.visible')
          })

          it('The small heading text has number of times likes have been clicked', () => {
            cy.get('small span#times').should('be.visible')
          })

          it('The span element has 0 as its default value', () => {
            cy.get('small span#times').should('be.visible').should('have.text', '0')
          })
        })
      })

      context('Image on the body', () => {
        it('The image is visible', () => {
          cy.get('.loveMe').should('be.visible')
        })

        it('Doubleclick on image', () => {
          cy.get('.loveMe').should('be.visible').dblclick()
        })

        it('There is an increment in the like count above when I double click on the image', () => {
          cy.get('.loveMe').should('be.visible').dblclick()
          cy.get('small span#times').should('have.text', '1')
        })

        it('The heart icon is visible on the image', () => {
          cy.get('.loveMe').dblclick()
          cy.get('.loveMe i.fas.fa-heart').should('be.visible')
        })
      })
    })
  })
})
