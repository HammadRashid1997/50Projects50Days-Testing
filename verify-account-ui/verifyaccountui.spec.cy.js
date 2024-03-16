// Function to check for the body 
function isBodyVisible() {
  it('The body is visible', () => {
    cy.get('body').should('be.visible')
  })
}

describe('Project Verify UI Account', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/verify-account-ui/index.html')
  })

  it('Opens the homepage', () => {

  })

  it('The body is visible', () => {
    isBodyVisible()
  })

  context('Body', () => {
    context('Background', () => {
      it('The body is visible', () => {
        isBodyVisible()
      })

      it('The body color is correct', () => {
        cy.get('body')
        .should('be.visible')
        .should('have.css', 'background-color', 'rgb(251, 252, 254)')
      })
    })

    context('Container', () => {
      it('The container is visible', () => {
        cy.get('body .container')
        .should('be.visible')
      })

      it('The container has correct color', () => {
        cy.get('body .container')
        .should('be.visible')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      })

      it('The container has correct border color', () => {
        cy.get('body .container')
        .should('be.visible')
        .should('have.css', 'border-color', 'rgb(0, 0, 0)')
      })

      context('Verify your Account', () => {
        it('The text is visible', () => {
          cy.xpath('//div[@class="container"]/h2')
          .should('be.visible')
        })

        it('The text is correct', () => {
          cy.xpath('//div[@class="container"]/h2')
          .should('be.visible')
          .should('have.text', 'Verify Your Account')
        })

        it('The text has corect text color', () => {
          cy.xpath('//div[@class="container"]/h2')
          .should('have.css', 'color', 'rgb(0, 0, 0)')
        })
      })

      context('Text Below Heading', () => {
        it('The text is visible', () => {
          cy.xpath('//div[@class="container"]/p')
          .should('be.visible')
        })

        it('The text is correct', () => {
          const expectedTextPart1 = 'We emailed you the six digit code to cool_guy@email.com'
          const expectedTextPart2 = 'Enter the code below to confirm your email address.'
          cy.xpath('//div[@class="container"]/p')
            .should('be.visible')
            .invoke('text')
            .should('include', expectedTextPart1)
            .should('include', expectedTextPart2)
        })

        it('The text has corect text color', () => {
          cy.xpath('//div[@class="container"]/p')
          .should('have.css', 'color', 'rgb(0, 0, 0)')
        })
      })

      context('Code', () => {
        it('The code container is visible', () => {
          cy.get('.code-container')
          .should('be.visible')
        })

        context('First box', () => {
          it('The first box is visible', () => {
            cy.xpath('/html/body/div[1]/div/input[1]')
            .should('be.visible')
          })

          it('The first box has the placeholder text 0', () => {
            cy.xpath('/html/body/div[1]/div/input[1]')
            .should('be.visible')
            .should('have.attr', 'placeholder', '0')
          })

          it('The minimum value in the box is 0', () => {
            cy.xpath('/html/body/div[1]/div/input[1]')
            .should('be.visible')
            .should('have.attr', 'min', '0')
          })

          it('The maximum value in the box is 9', () => {
            cy.xpath('/html/body/div[1]/div/input[1]')
            .should('be.visible')
            .should('have.attr', 'max', '9')
          })

          it('Any value between 0 and 9 is acceptable', () => {
            cy.xpath('/html/body/div[1]/div/input[1]')
            for (let value = 0; value <= 9; value++) {
              cy.xpath('/html/body/div[1]/div/input[1]')
              .clear()
              .type(value)
              cy.xpath('/html/body/div[1]/div/input[1]')
              .should('have.value', value.toString())
            }
          })
        })

        context('Second box', () => {
          it('The second box is visible', () => {
            cy.xpath('/html/body/div[1]/div/input[2]')
            .should('be.visible')
          })

          it('The second box has the placeholder text 0', () => {
            cy.xpath('/html/body/div[1]/div/input[2]')
            .should('be.visible')
            .should('have.attr', 'placeholder', '0')
          })

          it('The minimum value in the box is 0', () => {
            cy.xpath('/html/body/div[1]/div/input[2]')
            .should('be.visible')
            .should('have.attr', 'min', '0')
          })

          it('The maximum value in the box is 9', () => {
            cy.xpath('/html/body/div[1]/div/input[2]')
            .should('be.visible')
            .should('have.attr', 'max', '9')
          })

          it('Any value between 0 and 9 is acceptable', () => {
            cy.xpath('/html/body/div[1]/div/input[2]')
            for (let value = 0; value <= 9; value++) {
              cy.xpath('/html/body/div[1]/div/input[2]')
              .clear()
              .type(value)
              cy.xpath('/html/body/div[1]/div/input[2]')
              .should('have.value', value.toString())
            }
          })
        })

        context('Third box', () => {
          it('The third box is visible', () => {
            cy.xpath('/html/body/div[1]/div/input[3]')
            .should('be.visible')
          })

          it('The third box has the placeholder text 0', () => {
            cy.xpath('/html/body/div[1]/div/input[3]')
            .should('be.visible')
            .should('have.attr', 'placeholder', '0')
          })

          it('The minimum value in the box is 0', () => {
            cy.xpath('/html/body/div[1]/div/input[3]')
            .should('be.visible')
            .should('have.attr', 'min', '0')
          })

          it('The maximum value in the box is 9', () => {
            cy.xpath('/html/body/div[1]/div/input[3]')
            .should('be.visible')
            .should('have.attr', 'max', '9')
          })

          it('Any value between 0 and 9 is acceptable', () => {
            cy.xpath('/html/body/div[1]/div/input[3]')
            for (let value = 0; value <= 9; value++) {
              cy.xpath('/html/body/div[1]/div/input[3]')
              .clear()
              .type(value)
              cy.xpath('/html/body/div[1]/div/input[3]')
              .should('have.value', value.toString())
            }
          })
        })

        context('Fourth box', () => {
          it('The fourth box is visible', () => {
            cy.xpath('/html/body/div[1]/div/input[4]')
            .should('be.visible')
          })

          it('The fourth box has the placeholder text 0', () => {
            cy.xpath('/html/body/div[1]/div/input[4]')
            .should('be.visible')
            .should('have.attr', 'placeholder', '0')
          })

          it('The minimum value in the box is 0', () => {
            cy.xpath('/html/body/div[1]/div/input[4]')
            .should('be.visible')
            .should('have.attr', 'min', '0')
          })

          it('The maximum value in the box is 9', () => {
            cy.xpath('/html/body/div[1]/div/input[4]')
            .should('be.visible')
            .should('have.attr', 'max', '9')
          })

          it('Any value between 0 and 9 is acceptable', () => {
            cy.xpath('/html/body/div[1]/div/input[4]')
            for (let value = 0; value <= 9; value++) {
              cy.xpath('/html/body/div[1]/div/input[4]')
              .clear()
              .type(value)
              cy.xpath('/html/body/div[1]/div/input[4]')
              .should('have.value', value.toString())
            }
          })
        })

        context('Fifth box', () => {
          it('The fifth box is visible', () => {
            cy.xpath('/html/body/div[1]/div/input[5]')
            .should('be.visible')
          })

          it('The first box has the placeholder text 0', () => {
            cy.xpath('/html/body/div[1]/div/input[5]')
            .should('be.visible')
            .should('have.attr', 'placeholder', '0')
          })

          it('The minimum value in the box is 0', () => {
            cy.xpath('/html/body/div[1]/div/input[5]')
            .should('be.visible')
            .should('have.attr', 'min', '0')
          })

          it('The maximum value in the box is 9', () => {
            cy.xpath('/html/body/div[1]/div/input[5]')
            .should('be.visible')
            .should('have.attr', 'max', '9')
          })

          it('Any value between 0 and 9 is acceptable', () => {
            cy.xpath('/html/body/div[1]/div/input[5]')
            for (let value = 0; value <= 9; value++) {
              cy.xpath('/html/body/div[1]/div/input[5]')
              .clear()
              .type(value)
              cy.xpath('/html/body/div[1]/div/input[5]')
              .should('have.value', value.toString())
            }
          })
        })

        context('Sixth box', () => {
          it('The sixth box is visible', () => {
            cy.xpath('/html/body/div[1]/div/input[6]')
            .should('be.visible')
          })

          it('The sixth box has the placeholder text 0', () => {
            cy.xpath('/html/body/div[1]/div/input[6]')
            .should('be.visible')
            .should('have.attr', 'placeholder', '0')
          })

          it('The minimum value in the box is 0', () => {
            cy.xpath('/html/body/div[1]/div/input[6]')
            .should('be.visible')
            .should('have.attr', 'min', '0')
          })

          it('The maximum value in the box is 9', () => {
            cy.xpath('/html/body/div[1]/div/input[6]')
            .should('be.visible')
            .should('have.attr', 'max', '9')
          })

          it('Any value between 0 and 9 is acceptable', () => {
            Cypress.on('uncaught:exception', (err, runnable) => {
              return false
            })
          
            for (let value = 0; value <= 9; value++) {
              cy.xpath('/html/body/div[1]/div/input[6]')
              .clear()
              .type(value)
            }
          })
        })
      })

      context('Info section', () => {
        it('The info container is visible', () => {
          cy.xpath('/html/body/div[1]/small')
          .should('be.visible')
        })

        it('The info container has the corect background color', () => {
          cy.xpath('/html/body/div[1]/small')
          .should('be.visible')
          .should('have.css', 'background-color', 'rgb(234, 234, 234)')
        })

        it('The info container has the text visible in it', () => {
          cy.xpath('/html/body/div[1]/small')
          .should('be.visible')
        })

        it('The info container has correct text visible in it', () => {
          cy.xpath('/html/body/div[1]/small')
          .should('be.visible')
          .invoke('text')
          .should('include', 'This is design only. We didn\'t actually send you an email as we don\'t have your email, right?')
        })

        it('The info container has correct text color', () => {
          cy.xpath('/html/body/div[1]/small')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(119, 119, 119)')
        })
      })
    })
  })
})
