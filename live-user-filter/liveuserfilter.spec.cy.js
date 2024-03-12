describe('Project: Live User Filter', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/live-user-filter/index.html')
  })

  it('Opens the Home Page', () => {

  })

  it('The body is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    it('The body is visible', () => {
      cy.get('body').should('be.visible')
    })

    it('The body has correct color', () => {
      cy.get('body').should('have.css', 'background-color', 'rgb(248, 249, 253)')
    })

    context('Search Container', () => {
      it('The container is visible', () => {
        cy.wait(5)
        cy.xpath('//div[@class="container"]').should('be.visible')
      })

      context('Header', () => {
        it('The header container is visible', () => {
          cy.xpath('//header[@class="header"]').should('be.visible')
        })

        it('The header container has correct background color', () => {
          cy.xpath('//header[@class="header"]').should('be.visible')
            .should('have.css', 'background-color', 'rgb(62, 87, 219)')
        })

        context('Title Text', () => {
          it('The title text is visible', () => {
            cy.xpath('//h4[@class="title"]').should('be.visible')
          })

          it('The title has correct text', () => {
            cy.xpath('//h4[@class="title"]').should('be.visible')
              .should('have.text', 'Live User Filter')
          })

          it('The title text has correct white color', () => {
            cy.xpath('//h4[@class="title"]').should('be.visible')
              .should('have.css', 'color', 'rgb(255, 255, 255)')
          })
        })

        context('Subtitle Text', () => {
          it('The title text is visible', () => {
            cy.xpath('//small[@class="subtitle"]').should('be.visible')
          })

          it('The title has correct text', () => {
            cy.xpath('//small[@class="subtitle"]').should('be.visible')
              .should('have.text', 'Search by name and/or location')
          })

          it('The title text has correct white color', () => {
            cy.xpath('//small[@class="subtitle"]').should('be.visible')
              .should('have.css', 'color', 'rgb(255, 255, 255)')
          })
        })

        context('Search Bar', () => {
          it('The search bar is visible', () => {
            cy.xpath('//input[@id="filter"]').should('be.visible')
          })

          it('The search bar has correct background color', () => {
            cy.xpath('//input[@id="filter"]').should('be.visible')
              .should('have.css', 'background-color', 'rgba(0, 0, 0, 0.3)')
          })

          it('The placeholder text is Search', () => {
            cy.xpath('//input[@id="filter"]').should('be.visible')
              .should('have.attr', 'placeholder', 'Search')
          })
          
          it('Filters results based on search input', () => {
            const searchTerm = 'a' 
            cy.get('#filter').type(searchTerm)
            cy.wait(5000) 
            cy.get('#result li:not(.hide)').each(($li) => {
              cy.wrap($li).should('contain', searchTerm)
            })
          })
        })
      })

      context('Results', () => {
        it('The results container is visible', () => {
          cy.xpath('//ul[@class="user-list"]').should('be.visible')
        })

        it('The results are visible', () => {
          cy.get('#result li').should('have.length', 50)
        })

        it('The 50 results with name, location, and image are being displayed', () => {
          cy.get('#result').scrollTo('bottom')
          for (let i = 0; i < 50; i++) {
            cy.get(`#result li:nth-child(${i + 1})`).scrollIntoView()
            cy.get(`#result li:nth-child(${i + 1}) h4`).should('be.visible')
            cy.get(`#result li:nth-child(${i + 1}) p`).should('be.visible')
            cy.get(`#result li:nth-child(${i + 1}) img`).should('be.visible')
          }
        })
      })
    })
  })
})
