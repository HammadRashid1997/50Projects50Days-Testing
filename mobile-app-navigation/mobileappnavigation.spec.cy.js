describe('Projec Mobile Tab Navigation', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/mobile-tab-navigation/index.html')
  })

  it('Opens the home page', () => {

  })

  it('The body is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    it('The body is visible', () => {
      cy.get('body').should('be.visible')
    })

    it('The color of the body is correct', () => {
      cy.get('body').should('be.visible')
      .should('have.css', 'background-color', 'rgba(155, 89, 182, 0.7)')
    })
    context('Background', () => {
      it('The color of the body is correct', () => {
        cy.get('body').should('be.visible')
        .should('have.css', 'background-color', 'rgba(155, 89, 182, 0.7)')
      })

      context('Main Content', () => {
        it('The mobile screen is visible', () => {
          cy.xpath('//div[@class="phone"]').should('be.visible')
        })

        it('The mobile screen has white border', () => {
          cy.xpath('//div[@class="phone"]').should('be.visible')
          .should('have.css', 'border', '3px solid rgb(238, 238, 238)')
        })

        context('Buttons', () => {
          context('Home button', () => {
            it('The home button is visible', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[1]').should('be.visible')
            })

            it('The home button has corect logo visible', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[1]/i').should('be.visible')
            })

            it('The home text is visible, correct and has the correct color', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[1]/p').should('be.visible')
              .should('have.text', 'Home').should('have.css', 'color', 'rgb(142, 68, 173)')
            })

            it('The button is clickable', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[1]').should('be.visible')
              .click()
              cy.xpath('/html/body/div[1]/img[4]').should('be.visible')
            })
          })

          context('Work button', () => {
            it('The work button is visible', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[2]').should('be.visible')
            })

            it('The work button has corect logo visible', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[2]/i').should('be.visible')
            })

            it('The work text is visible, correct and has the correct color', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[2]/p').should('be.visible')
              .should('have.text', 'Work').should('have.css', 'color', 'rgb(119, 119, 119)')
            })

            it('The button is clickable', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[2]').should('be.visible')
              .click()
              cy.xpath('/html/body/div[1]/img[4]').should('be.visible')
            })
          })

          context('Blog button', () => {
            it('The blog button is visible', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[3]').should('be.visible')
            })

            it('The blog button has corect logo visible', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[3]/i').should('be.visible')
            })

            it('The blog text is visible, correct and has the correct color', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[3]/p').should('be.visible')
              .should('have.text', 'Blog').should('have.css', 'color', 'rgb(119, 119, 119)')
            })

            it('The button is clickable', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[3]').should('be.visible')
              .click()
              cy.xpath('/html/body/div[1]/img[4]').should('be.visible')
            })
          })

          context('About Us button', () => {
            it('The about us button is visible', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[4]').should('be.visible')
            })

            it('The about us button has corect logo visible', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[4]/i').should('be.visible')
            })

            it('The about us text is visible, correct and has the correct color', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[4]/p').should('be.visible')
              .should('have.text', 'About Us').should('have.css', 'color', 'rgb(119, 119, 119)')
            })

            it('The button is clickable', () => {
              cy.xpath('/html/body/div[1]/nav/ul/li[4]').should('be.visible')
              .click()
              cy.xpath('/html/body/div[1]/img[4]').should('be.visible')
            })
          })
        })
      })
    })
  })

})
