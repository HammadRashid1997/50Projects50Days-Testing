describe('Project Sound Board', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/sound-board/index.html')
  })

  it('Opens the Home Page', () => {

  })

  it('The background is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    it('The background is visible', () => {
      cy.get('body').should('be.visible')
    })
    context('Background', () => {
      it('The background is visible', () => {
        cy.get('body').should('be.visible')
      })

      it('The background has correct color', () => {
        cy.get('body').should('have.css', 'background-color', 'rgb(161, 100, 223)')
      })

      context('Sound container', () => {
        it('The sound container is visible', () => {
          cy.xpath('//div[@id="buttons"]').should('be.visible')
        })

        // Applause Sound
        context('Applause', () => {
          it('The applause container is visible', () => {
            cy.xpath('/html/body/div[1]/button[1]').should('be.visible')
          })

          it('The applause container has correct color visible', () => {
            cy.xpath('/html/body/div[1]/button[1]').should('be.visible').should('have.css', 'background-color', 'rgb(102, 51, 153)')
          })

          it('The text is visible', () => {
            cy.xpath('/html/body/div[1]/button[1]').should('be.visible').invoke('text').should('include', 'applause')
          })

          it('The text color is white', () => {
            cy.xpath('/html/body/div[1]/button[1]')
              .should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The button is clickable', () => {
            cy.xpath('/html/body/div[1]/button[1]').should('be.visible').click()
          })

          it('The button when clicked runs the applause music', () => {
            cy.xpath('/html/body/div[1]/button[1]').should('be.visible').click()
            cy.xpath('//audio[@id="applause"]').should('have.prop', 'paused', false)
            cy.wait(3)
          })
        })


        // Boo Sound
        context('Boo', () => {
          it('The boo container is visible', () => {
            cy.xpath('/html/body/div[1]/button[2]').should('be.visible')
          })

          it('The boo container has correct color visible', () => {
            cy.xpath('/html/body/div[1]/button[2]').should('be.visible').should('have.css', 'background-color', 'rgb(102, 51, 153)')
          })

          it('The text is visible', () => {
            cy.xpath('/html/body/div[1]/button[2]').should('be.visible').invoke('text').should('include', 'boo')
          })

          it('The text color is white', () => {
            cy.xpath('/html/body/div[1]/button[2]')
              .should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The button is clickable', () => {
            cy.xpath('/html/body/div[1]/button[2]').should('be.visible').click()
          })

          it('The button when clicked runs the applause music', () => {
            cy.xpath('/html/body/div[1]/button[2]').should('be.visible').click()
            cy.xpath('//audio[@id="boo"]').should('have.prop', 'paused', false)
            cy.wait(3)
          })
        })

        // Gasp Sound
        context('Gasp', () => {
          it('The gasp container is visible', () => {
            cy.xpath('/html/body/div[1]/button[3]').should('be.visible')
          })

          it('The gasp container has correct color visible', () => {
            cy.xpath('/html/body/div[1]/button[3]').should('be.visible').should('have.css', 'background-color', 'rgb(102, 51, 153)')
          })

          it('The text is visible', () => {
            cy.xpath('/html/body/div[1]/button[3]').should('be.visible').invoke('text').should('include', 'gasp')
          })

          it('The text color is white', () => {
            cy.xpath('/html/body/div[1]/button[3]')
              .should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The button is clickable', () => {
            cy.xpath('/html/body/div[1]/button[3]').should('be.visible').click()
          })

          it('The button when clicked runs the applause music', () => {
            cy.xpath('/html/body/div[1]/button[3]').should('be.visible').click()
            cy.xpath('//audio[@id="gasp"]').should('have.prop', 'paused', false)
            cy.wait(3)
          })
        })

        // Tada Sound
        context('Tada', () => {
          it('The tada container is visible', () => {
            cy.xpath('/html/body/div[1]/button[4]').should('be.visible')
          })

          it('The tada container has correct color visible', () => {
            cy.xpath('/html/body/div[1]/button[4]').should('be.visible').should('have.css', 'background-color', 'rgb(102, 51, 153)')
          })

          it('The text is visible', () => {
            cy.xpath('/html/body/div[1]/button[4]').should('be.visible').invoke('text').should('include', 'tada')
          })

          it('The text color is white', () => {
            cy.xpath('/html/body/div[1]/button[4]')
              .should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The button is clickable', () => {
            cy.xpath('/html/body/div[1]/button[4]').should('be.visible').click()
          })

          it('The button when clicked runs the applause music', () => {
            cy.xpath('/html/body/div[1]/button[4]').should('be.visible').click()
            cy.xpath('//audio[@id="tada"]').should('have.prop', 'paused', false)
            cy.wait(3)
          })
        })

        // Victory Sound
        context('Victory', () => {
          it('The victory container is visible', () => {
            cy.xpath('/html/body/div[1]/button[5]').should('be.visible')
          })

          it('The victory container has correct color visible', () => {
            cy.xpath('/html/body/div[1]/button[5]').should('be.visible').should('have.css', 'background-color', 'rgb(102, 51, 153)')
          })

          it('The text is visible', () => {
            cy.xpath('/html/body/div[1]/button[5]').should('be.visible').invoke('text').should('include', 'victory')
          })

          it('The text color is white', () => {
            cy.xpath('/html/body/div[1]/button[5]')
              .should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The button is clickable', () => {
            cy.xpath('/html/body/div[1]/button[5]').should('be.visible').click()
          })

          it('The button when clicked runs the applause music', () => {
            cy.xpath('/html/body/div[1]/button[5]').should('be.visible').click()
            cy.xpath('//audio[@id="victory"]').should('have.prop', 'paused', false)
          })
        })

        // Wrong Sound
        context('Wrong', () => {
          it('The wrong container is visible', () => {
            cy.xpath('/html/body/div[1]/button[6]').should('be.visible')
          })

          it('The wrong container has correct color visible', () => {
            cy.xpath('/html/body/div[1]/button[6]').should('be.visible').should('have.css', 'background-color', 'rgb(102, 51, 153)')
          })

          it('The text is visible', () => {
            cy.xpath('/html/body/div[1]/button[6]').should('be.visible').invoke('text').should('include', 'wrong')
          })

          it('The text color is white', () => {
            cy.xpath('/html/body/div[1]/button[6]')
              .should('have.css', 'color', 'rgb(255, 255, 255)')
          })

          it('The button is clickable', () => {
            cy.xpath('/html/body/div[1]/button[6]').should('be.visible').click()
          })

          it('The button when clicked runs the applause music', () => {
            cy.xpath('/html/body/div[1]/button[6]').should('be.visible').click()
            cy.wait(3)
            cy.xpath('//audio[@id="wrong"]').should('have.prop', 'paused', false)
          })
        })
      })
    })
  })
})
