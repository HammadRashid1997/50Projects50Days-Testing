// Function to check if the screen/body is visible
function backgroundBodyVisible() {
  it('The screen/background is visible', () => {
    cy.get('body').should('be.visible')
  })
}

describe('Project: Incrementing Counter', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/incrementing-counter/')
  })

  it('Opens the homepage', () => {

  })

  it('The screen is visible', () => {
    backgroundBodyVisible()
  })

  context('Body', () => {
    context('Background', () => {
      it('The background is visible', () => {
        backgroundBodyVisible()
      })

      it('The background has the desired color', () => {
        cy.get('body').should('be.visible').should('have.css', 'background-color', 'rgb(142, 68, 173)')
      })
    })

    context('Counter Container', () => {
      it('The containers are visible', () => {
        cy.get('.counter-container').should('be.visible')
      })

      // The size of the social media icons
      context('The Social Media Icons', () => {
        it('The icons have the same font size', () => {
          cy.get('.fa-twitter').should('have.css', 'font-weight', '400')
          cy.get('.fa-youtube').should('have.css', 'font-weight', '400')
          cy.get('.fa-facebook').should('have.css', 'font-weight', '400')
        })
      })

      // Twitter Followers
      context('Twitter Container', () => {
        context('Twitter Icon', () => {
          it('The Twitter icon is visible', () => {
            cy.get('.fa-twitter').should('be.visible')
          })

          it('The Twitter icon is white in color', () => {
            cy.get('.fa-twitter').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
          })
        })

        context('Twitter Followers Increment Counter', () => {
          it('The increment counter is visible', () => {
            cy.get('.counter').get('[data-target="12000"]').should('exist')
          })

          it('The counter value is white in color', () => {
            cy.get('.counter').get('[data-target="12000"]').should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The value of the counter should not exceed 12000', () => {
            cy.get('.counter').get('[data-target="12001"]').should('not.exist')
          })

          it('The value of the counter should not be less than 0', () => {
            cy.get('.counter').get('[data-target="-1"]').should('not.exist')
          })
        })

        context('Twitter Followers Text', () => {
          it('The Twitter Followers text is visible', () => {
            cy.contains('.counter-container', 'Twitter Followers').should('be.visible');
          })

          it('The Twitter Followers text is white in color', () => {
            cy.contains('.counter-container', 'Twitter Followers').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
          })
        })
      })

      // Youtube Subscribers
      context('Youtube Container', () => {
        context('Youtube Icon', () => {
          it('The Youtube icon is visible', () => {
            cy.get('.fa-youtube').should('be.visible')
          })

          it('The Youtube icon is white in color', () => {
            cy.get('.fa-youtube').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
          })
        })

        context('Youtube Followers Increment Counter', () => {
          it('The increment counter is visible', () => {
            cy.get('.counter').get('[data-target="5000"]').should('exist')
          })

          it('The counter value is white in color', () => {
            cy.get('.counter').get('[data-target="5000"]').should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The value of the counter should not exceed 5000', () => {
            cy.get('.counter').get('[data-target="5001"]').should('not.exist')
          })

          it('The value of the counter should not be less than 0', () => {
            cy.get('.counter').get('[data-target="-1"]').should('not.exist')
          })
        })

        context('Youtube Subscribers Text', () => {
          it('The Youtube Subscribers text is visible', () => {
            cy.contains('.counter-container', 'YouTube Subscribers').should('be.visible');
          })

          it('The Youtube Subscribers text is white in color', () => {
            cy.contains('.counter-container', 'YouTube Subscribers').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
          })
        })
      })

      // Facebook Fans
      context('Facebook Container', () => {
        context('Facebook Icon', () => {
          it('The Facebook icon is visible', () => {
            cy.get('.fa-facebook').should('be.visible')
          })

          it('The Facebook icon is white in color', () => {
            cy.get('.fa-facebook').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
          })
        })

        context('Facebook Fans Increment Counter', () => {
          it('The increment counter is visible', () => {
            cy.get('.counter').get('[data-target="7500"]').should('exist')
          })

          it('The counter value is white in color', () => {
            cy.get('.counter').get('[data-target="7500"]').should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The value of the counter should not exceed 12000', () => {
            cy.get('.counter').get('[data-target="7501"]').should('not.exist')
          })

          it('The value of the counter should not be less than 0', () => {
            cy.get('.counter').get('[data-target="-1"]').should('not.exist')
          })
        })

        context('Facebook Fans Text', () => {
          it('TheFacebook Fans text is visible', () => {
            cy.contains('.counter-container', 'Facebook Fans').should('be.visible');
          })

          it('The Facebook Fans text is white in color', () => {
            cy.contains('.counter-container', 'Facebook Fans').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
          })
        })
      })
    })
  })
})
