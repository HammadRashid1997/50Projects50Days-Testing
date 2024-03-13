describe('Project Quiz App', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/quiz-app/index.html')
  })

  it('Opens the home page', () => {

  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    context('Baackground', () => {
      it('Background is visible', () => {
        cy.get('body').should('be.visible')
      })

      it('Background has the correct color displayed', () => {
        cy.get('body').should('be.visible').should('have.css', 'background-color', 'rgb(184, 198, 219)')
      })

      context('Quiz', () => {
        it('Quiz container is visible', () => {
          cy.get('.quiz-container').should('be.visible')
        })

        context('Question 1', () => {
          context('Question', () => {
            it('The heading is visible', () => {
              cy.get('h2').should('be.visible')
            })

            it('The heading has correct text', () => {
              cy.get('h2#question').should('be.visible').should('have.text', 'Which language runs in a web browser?')
            })

            it('The heading has correct color', () => {
              cy.get('h2').should('be.visible').should('have.css', 'color', 'rgb(0, 0, 0)')
            })
          })

          context('Options', () => {
            it('The options are visible', () => {
              cy.get('.quiz-header ul').should('be.visible')
            })

            it('The options are correct', () => {
              cy.get('ul li').invoke('text').should('include', 'Java')
              cy.get('ul li').invoke('text').should('include', 'C')
              cy.get('ul li').invoke('text').should('include', 'Python')
              cy.get('ul li').invoke('text').should('include', 'JavaScript')
            })

            it('The color of the options is correct', () => {
              cy.get('ul li').should('have.css', 'color', 'rgb(0, 0, 0)')
            })

            it('The buttons of the options are clickable', () => {
              cy.get('#a').check()
              cy.get('#a').should('be.checked')

              cy.get('#b').check()
              cy.get('#b').should('be.checked')

              cy.get('#c').check()
              cy.get('#c').should('be.checked')

              cy.get('#d').check()
              cy.get('#d').should('be.checked')

              cy.get('#submit').click()
            })
          })
        })
      })
    })
  })
})
