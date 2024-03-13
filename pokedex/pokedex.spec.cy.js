describe('Project Pokedex', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/pokedex/')
  })

  it('Opens the home page', () => {

  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    context('Background', () => {
      it('The background is visible', () => {
        cy.get('body').should('be.visible')
      })
    })

    context('Content', () => {
      context('Heading', () => {
        it('The heading is visible', () => {
          cy.get('body h1').should('be.visible')
        })

        it('The heading text is correct', () => {
          cy.get('body h1').should('have.text', 'Pokedex')
        })

        it('The heading text has correct color', () => {
          cy.get('body h1').should('be.visible').should('have.css', 'color', 'rgb(0, 0, 0)')
        })
      })

      context('Pokemons', () => {
        it('The pokemon container is visible', () => {
          cy.get('.poke-container').should('be.visible')
        })

        it('The pokemon container has 150 pokemons', () => {
          cy.get('.pokemon', { timeout: 30000 }).should('have.length', 150);
        })
      })
    })
  })
})
