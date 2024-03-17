describe('Project Split Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/split-landing-page/index.html')
  })

  it('Opens the Home Page', () => {

  })

  it('The body is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    it('The container is visible', () => {
      cy.get('.container').should('be.visible')
    })

    context('Left container', () => {
      it('The left container is visible', () => {
        cy.get('.split.left').should('be.visible')
      })

      it('The left container has correct color', () => {
        cy.get('.split.left').should('be.visible')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      })

      context('Text', () => {
        context('Heading Text', () => {
          it('The heading text is visible', () => {
            cy.xpath('/html/body/div[1]/div[1]/h1').should('be.visible')
          })

          it('The heading text is correct', () => {
            cy.xpath('/html/body/div[1]/div[1]/h1').should('be.visible')
            .should('have.text', 'Playstation 5')
          })

          it('The heading text has correct color', () => {
            cy.xpath('/html/body/div[1]/div[1]/h1').should('be.visible')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
          })
        })
      })

      context('Buy Now Button', () => {
        it('The button is visible', () => {
          cy.xpath('/html/body/div[1]/div[1]/a').should('be.visible')
        })

        it('The button has text Buy Now', () => {
          cy.xpath('/html/body/div[1]/div[1]/a').should('be.visible')
          .should('have.text', 'Buy Now')
        })

        it('The button has text Buy Now in white color', () => {
          cy.xpath('/html/body/div[1]/div[1]/a').should('be.visible')
          .should('have.css', 'color', 'rgb(255, 255, 255)')
        })

        it('The button has correct color', () => {
          cy.xpath('/html/body/div[1]/div[1]/a').should('be.visible').trigger('mouseover')
          .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        })

        it('The button is clickable', () => {
          cy.xpath('/html/body/div[1]/div[1]/a').should('be.visible').click()
        })
      })
    })

    context('Right Container', () => {
      it('The right container is visible', () => {
        cy.get('.split.right').should('be.visible')
      })

      it('The right container has correct color', () => {
        cy.get('.split.right').should('be.visible')
        .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      })

      context('Text', () => {
        context('Heading Text', () => {
          it('The heading text is visible', () => {
            cy.xpath('/html/body/div[1]/div[2]/h1').should('be.visible')
          })

          it('The heading text is correct', () => {
            cy.xpath('/html/body/div[1]/div[2]/h1').should('be.visible').should('have.text', 'XBox Series X')
            
          })

          it('The heading text has correct color', () => {
            cy.xpath('/html/body/div[1]/div[2]/h1').should('be.visible')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
          })
        })
      })

      context('Buy Now Button', () => {
        it('The button is visible', () => {
          cy.xpath('/html/body/div[1]/div[2]/a').should('be.visible')
        })

        it('The button has text Buy Now', () => {
          cy.xpath('/html/body/div[1]/div[2]/a').should('be.visible')
          .should('have.text', 'Buy Now')
        })

        it('The button has text Buy Now in white color', () => {
          cy.xpath('/html/body/div[1]/div[2]/a').should('be.visible')
          .should('have.css', 'color', 'rgb(255, 255, 255)')
        })

        it('The button changes color when mouse hovered over', () => {
          cy.xpath('/html/body/div[1]/div[2]/a').should('be.visible').trigger('mouseover')
          .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        })

        it('The button is clickable', () => {
          cy.xpath('/html/body/div[1]/div[2]/a').should('be.visible').click()
        })
      })
    })
  })
})
