describe('Project: Sticky Navigation', () => {
  beforeEach('passes', () => {
    cy.visit('http://127.0.0.1:5500/sticky-navigation/')
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

      it('The background image is displayed', () => {
        cy.get('.hero').should('have.css', 'background-image').and('include', 'https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
      })
    })

    context('Top Container', () => {
      it('The container is visible', () => {
        cy.get('.hero .container').should('be.visible')
      })

      context('Container Text', () => {
        context('h1 Heading', () => {
          it('The text is visible', () => {
            cy.get('.hero .container h1').should('be.visible')
          })

          it('The text is correct', () => {
            cy.get('.hero .container h1').should('have.text', 'Welcome To My Website')
          })
        })
        context('Text', () => {
          it('The text is visible', () => {
            cy.get('.hero .container p').should('be.visible')
          })

          it('The text is correct', () => {
            cy.get('.hero .container p').should('have.text', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?')
          })
        })
      })

      context('Navbar', () => {
        it('The navbar is visible', () => {
          cy.get('.nav').should('be.visible')
        })

        context('Navbar container', () => {
          context('Logo', () => {
            it('The logo is visible', () => {
              cy.get('.logo a').should('be.visible')
            })

            it('The logo has correct text', () => {
              cy.get('.logo a').should('be.visible').and('have.text', 'My Website')
            })
          })

          context('ul Elements', () => {
            it('The elements are visible', () => {
              cy.get('nav ul li').should('have.length', 4)
              cy.get('nav ul li a').should('be.visible')
            })

            context('Home', () => {
              it('The Home text is visible', () => {
                cy.get('nav ul li a').should('be.visible').invoke('text').should('include', 'Home')
              })
            })

            context('About', () => {
              it('The About text is visible', () => {
                cy.get('nav ul li a').should('be.visible').invoke('text').should('include', 'About')
              })
            })

            context('Services', () => {
              it('The Services text is visible', () => {
                cy.get('nav ul li a').should('be.visible').invoke('text').should('include', 'Services')
              })
            })

            context('Contact', () => {
              it('The Contact text is visible', () => {
                cy.get('nav ul li a').should('be.visible').invoke('text').should('include', 'Contact')
              })
            })
          })
        })
      })

      context('Container Content', () => {
        it('The container is visible', () => {
          cy.get('.container.content').should('be.visible')
        })

        it('The container has background color white', () => { 
          cy.get('.container.content').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
        })

        context('Content one', () => {
          context('h2 Heading', () => {
            it('The heading is visible', () => {
              cy.get('.container.content h2').should('be.visible')
            })

            it('The heading has correct text', () => {
              cy.get('.container.content h2').should('be.visible').should('have.text', 'Content One')
            })
          })

          context('h2 Heading text', () => {
            it('The h2 heading text is visible', () => {
              cy.get('.container.content p').should('be.visible')
            })

            it('The h2 heading text is correct', () => {
              cy.get('.container.content p').invoke('text').should('include', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!')
            })
          })
        })

        context('Content Two', () => {
          context('h3 Heading', () => {
            it('The heading is visible', () => {
              cy.get('.container.content h3').should('be.visible')
            })

            it('The heading has correct text', () => {
              cy.get('.container.content h3').should('be.visible').should('have.text', 'Content Two')
            })
          })

          context('h3 Heading text', () => {
            it('The h3 heading text is visible', () => {
              cy.get('.container.content p').should('be.visible')
            })

            it('The h3 heading text is correct', () => {
              cy.get('.container.content p').invoke('text').should('include', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste aperiam hic cumque repellat?')
            })
          })
        })
      })

    })
  })
})
