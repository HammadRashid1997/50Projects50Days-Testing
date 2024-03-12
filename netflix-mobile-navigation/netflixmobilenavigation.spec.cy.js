describe('Project Netflix Mobile Navigation', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/netflix-mobile-navigation/index.html#')
  })

  it('Opens the home page', () => {

  })

  it('The body is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    context('Background', () => {
      it('The background is visible', () => {
        cy.get('body').should('be.visible')
      })

      it('The background color is correct', () => {
        cy.get('body').should('be.visible')
          .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      })
    })

    context('Content', () => {
      context('Netflix Logo', () => {
        it('The logo is visible', () => {
          cy.xpath('/html/body/img').should('be.visible')
        })
      })

      context('Text', () => {
        it('The text is visible', () => {
          cy.xpath('/html/body/p').should('be.visible')
        })

        it('The text is correct', () => {
          cy.xpath('/html/body/p').should('be.visible')
            .should('have.text', 'Mobile Navigation')
        })

        it('The text has correct color', () => {
          cy.xpath('/html/body/p').should('be.visible')
            .should('have.text', 'Mobile Navigation').should('have.css', 'color', 'rgb(0, 0, 0)')
        })
      })

      context('Containers', () => {
        it('The three lines at the top is visible', () => {
          cy.xpath('/html/body/button/i').should('be.visible')
        })

        it('The three lines are clickable', () => {
          cy.xpath('/html/body/button/i').should('be.visible')
            .click()
        })

        it('When clicked it displays the three containers', () => {
          cy.xpath('/html/body/button/i').should('be.visible')
            .click()
          cy.xpath('/html/body/div[1]').should('exist').should('have.css', 'background-color', 'rgb(34, 31, 31)')
          cy.xpath('/html/body/div[1]/div').should('exist').should('have.css', 'background-color', 'rgb(229, 9, 20)')
          cy.xpath('/html/body/div[1]/div/div').should('exist').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        })

        context('White container', () => {
          it('The container content is visible', () => {
            cy.xpath('/html/body/button/i').should('be.visible')
              .click()
            cy.xpath('/html/body/div[1]/div/div').should('be.visible')
          })

          it('The logo is visible', () => {
            cy.xpath('/html/body/button/i').should('be.visible')
              .click()
            cy.xpath('/html/body/div[1]/div/div/img').should('be.visible')
          })

          context('Text', () => {
            beforeEach(() => {
              cy.xpath('/html/body/button/i').should('be.visible')
                .click()
            })

            it('Teams text is visible, correct and has correct color', () => {
              cy.xpath('/html/body/div[1]/div/div/ul/li[1]/a').should('be.visible')
                .should('have.text', 'Teams')
                .should('have.css', 'color', 'rgb(34, 31, 31)')
            })

            it('Locations text is visible, correct and has correct color', () => {
              cy.xpath('/html/body/div[1]/div/div/ul/li[2]/a').should('be.visible')
                .should('have.text', 'Locations')
                .should('have.css', 'color', 'rgb(34, 31, 31)')
            })

            it('Life at Netflix text is visible, correct and has correct color', () => {
              cy.xpath('/html/body/div[1]/div/div/ul/li[3]/a').should('be.visible')
                .should('have.text', 'Life at Netflix')
                .should('have.css', 'color', 'rgb(34, 31, 31)')
            })

            it('Netflix Culture Memo text is visible, correct and has correct color', () => {
              cy.xpath('/html/body/div[1]/div/div/ul/li[4]/ul/li[1]/a').should('be.visible')
                .should('have.text', 'Netflix culture memo')
                .should('have.css', 'color', 'rgb(34, 31, 31)')
            })

            it('Work Life Balance text is visible, correct and has correct color', () => {
              cy.xpath('/html/body/div[1]/div/div/ul/li[4]/ul/li[2]/a').should('be.visible')
                .should('have.text', 'Work life balance')
                .should('have.css', 'color', 'rgb(34, 31, 31)')
            })

            it('Inclusion & Diversity text is visible, correct and has correct color', () => {
              cy.xpath('/html/body/div[1]/div/div/ul/li[4]/ul/li[3]/a').should('be.visible')
                .should('have.text', 'Inclusion & diversity')
                .should('have.css', 'color', 'rgb(34, 31, 31)')
            })

            it('Blogs text is visible, correct and has correct color', () => {
              cy.xpath('/html/body/div[1]/div/div/ul/li[4]/ul/li[4]/a').should('be.visible')
                .should('have.text', 'Blog')
                .should('have.css', 'color', 'rgb(34, 31, 31)')
            })

          })
        })
      })
    })
  })
})
