describe('Project Progress Steps', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/progress-steps/')
  })

  it('Opens the homepage', () => {

  })

  it('The body is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    context('Background', () => {
      it('The body should be visible', () => {
        cy.get('body').should('be.visible')
      })

      it('The body should have proper color', () => {
        cy.get('body').should('be.visible').should('have.css', 'background-color', 'rgb(31, 31, 31)')
      })

      context('Content', () => {
        context('Container', () => {
          it('The container is visible', () => {
            cy.get('.container').should('be.visible')
          })

          context('Progress Steps', () => {
            it('The progress steps are visible', () => {
              cy.get('.container .progress-container').should('be.visible')
            })

            it('The progress steps are numbered from 1 to 4', () => {
              cy.get('.container .progress-container .circle').should('be.visible')
            })

            it('The active progress step is visible', () => {
              cy.get('.container .progress-container .circle.active').should('be.visible')
            })

            it('The active progress step is 1', () => {
              cy.get('.container .progress-container .circle.active').should('be.visible').should('have.text', '1')
            })

            context('Buttons', () => {
              it('The buttons are visible', () => {
                cy.get('.btn').should('be.visible')
              })

              it('The button Previous is visible', () => {
                cy.get('.btn#prev').should('be.visible')
              })

              it('The text in button Previous is correct', () => {
                cy.get('.btn#prev').should('be.visible').should('have.text', 'Prev')
              })

              it('The button Next is visible', () => {
                cy.get('.btn#next').should('be.visible')
              })

              it('The text in button Next is correct', () => {
                cy.get('.btn#next').should('be.visible').should('have.text', 'Next')
              })

              it('The Next button is clickable', () => {
                cy.get('.btn#next').should('be.visible').click()
              })

              it('The Previous button is disabled when the url opens', () => {
                cy.get('.btn#prev').should('have.attr', 'disabled')
              })

              it('The Next button is disabled when the complete progress steps are active', () => {
                cy.get('.btn#next').should('be.visible').click().click().click()
                cy.get('.btn#next').should('have.attr', 'disabled')
              })

              it('The Previous and Next buttons are clickable when the progress bar is upto 2 or 3', () => {
                cy.get('.btn#next').should('be.visible').click()
                cy.get('.btn#prev').should('not.have.attr', 'disabled')
                cy.get('.btn#next').should('not.have.attr', 'disabled')
              })
            })
          })
        })
      })
    })
  })
})
