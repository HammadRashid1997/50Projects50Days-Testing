describe('Project: Auto Text Effect', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/auto-text-effect/index.html')
  })

  it('Opens the Home Page', () => {

  })

  it('The screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    context('Background', () => {
      it('The background is visible', () => {
        cy.get('body').should('be.visible')
      })

      it('The background color is visible', () => {
        cy.get('body').should('be.visible').should('have.css', 'background-color', 'rgb(233, 150, 122)')
      })

      context('Content', () => {
        it('The text is visible', () => {
          cy.get('#text').should('be.visible')
        })

        it('The text is black', () => {
          cy.get('#text').should('have.css', 'color', 'rgb(0, 0, 0)')
        })

        it('Verifies the text in the header', () => {
          cy.get('h1#text', { timeout: 10000 }).should('be.visible').should('have.text', 'We Love Programming!');
        })
      })

      context('Speed', () => {
        it('The speed icon is visible', () => {
          cy.get('div').should('be.visible')
        })

        it('The speed has correct label', () => {
          cy.xpath('/html/body/div[1]/label').should('be.visible').should('have.text', 'Speed:')
        })

        it('Accepts valid input within specified range and step', () => {

          cy.get('#speed')
            .should('have.value', '1')
            .should('have.attr', 'min', '1')
            .should('have.attr', 'max', '10')
            .should('have.attr', 'step', '1');

          for (let i = 1; i <= 9; i++) {
            cy.get('#speed').type('{uparrow}');
          }

          cy.get('#speed').should('have.value', '10');

          cy.get('#speed').type('{uparrow}');

          cy.get('#speed').should('have.value', '10');

          for (let i = 1; i <= 9; i++) {
            cy.get('#speed').type('{downarrow}');
          }

          cy.get('#speed').should('have.value', '1');

          cy.get('#speed').type('{downarrow}');

          cy.get('#speed').should('have.value', '1');
        });

      })
    })
  })
})
