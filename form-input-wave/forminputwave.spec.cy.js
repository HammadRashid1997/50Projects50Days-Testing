describe('Project Form Input Wave', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/form-input-wave/')
  })

  it('Opens the home page', () => {

  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    context('Background', () => {
      it('Background is visible', () => {
        cy.get('body').should('be.visible')
      })

      it('Background color is correct', () => {
        cy.get('body').should('be.visible').should('have.css', 'background-color', 'rgb(70, 130, 180)')
      })
    })

    context('Form', () => {
      it('The form is visible', () => {
        cy.get('.container').should('be.visible')
      })

      it('The background color is correct', () => {
        cy.get('.container').should('be.visible').should('have.css', 'background-color', 'rgba(0, 0, 0, 0.4)')
      })

      context('Heading Text', () => {
        it('The heading text is visible', () => {
          cy.get('.container h1').should('be.visible')
        })

        it('The heading text is correct', () => {
          cy.get('.container h1').should('have.text', 'Please Login')
        })

        it('The heading text has correct color', () => {
          cy.get('.container h1').should('have.css', 'color', 'rgb(255, 255, 255)')
        })
      })

      context('Form', () => {
        it('The form is visible', () => {
          cy.get('form').should('be.visible')
        })

        context('Email', () => {
          it('The email text is visible', () => {
            cy.xpath('/html/body/div[1]/form/div[1]/input').should('be.visible')
          })

          it('The email takes text', () => {
            cy.xpath('/html/body/div[1]/form/div[1]/input').should('be.visible').click().type('hammad@gmail.com')
          })
        })

        context('Password', () => {
          it('The password text is visible', () => {
            cy.xpath('/html/body/div[1]/form/div[2]/input').should('be.visible')
          })

          it('The password takes text', () => {
            cy.xpath('/html/body/div[1]/form/div[2]/input').should('be.visible').click().type('123456789')
          })
        })

        context('Login', () => {
          it('The login button is visible', () => {
            cy.get('.btn').should('be.visible')
          })

          it('The login button has correct background color', () => {
            cy.get('.btn').should('be.visible').should('have.css', 'background-color', 'rgb(173, 216, 230)')
          })

          it('The login button has the correct text', () => {
            cy.get('.btn').should('be.visible').should('have.text', 'Login')
          })

          it('The login text has the correct color', () => {
            cy.get('.btn').should('be.visible').should('have.text', 'Login').should('have.css', 'color', 'rgb(0, 0, 0)')
          })

          it('The button is clickable', () => {
            cy.get('.btn').should('be.visible').click()
          })

          it('Complete the form', () => {
            cy.xpath('/html/body/div[1]/form/div[1]/input').should('be.visible').click().type('hammad@gmail.com')
            cy.xpath('/html/body/div[1]/form/div[2]/input').should('be.visible').click().type('123456789')
            cy.get('.btn').should('be.visible').click()
          })
        })

        context('Register', () => {
          it('The register text is visible', () => {
            cy.xpath('/html/body/div[1]/form/p').should('be.visible')
          })

          context('Register', () => {
            it('The register text is visible', () => {
              cy.xpath('/html/body/div[1]/form/p/a').should('be.visible')
            })

            it('The register text has correct color', () => {
              cy.xpath('/html/body/div[1]/form/p/a').should('be.visible').should('have.css', 'color', 'rgb(173, 216, 230)')
            })
          })
        })
      })
    })
  })
})
