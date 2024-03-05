describe('Project FAQ Collapse', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/faq-collapse/index.html')
  })

  it('Opens the homepage', () => {

  })

  it('The body is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    context('Background', () => {
      it('The body is visible', () => {
        cy.get('body').should('be.visible')
      })
      
      it('The body color is correct', () => {
        cy.get('body').should('be.visible').should('have.css', 'background-color', 'rgb(240, 240, 240)')
      })
    })

    context('Content', () => {
      it('The content is visible', () => {
        cy.get('body').should('be.visible')
      })

      context('Title: Frequently Asked Questions', () => {
        it('The title is visible', () => {
          cy.get('body h1').should('be.visible')
        })

        it('The title is correct', () => {
          cy.get('body h1').should('have.text', 'Frequently Asked Questions')
        })

        it('The title has the correct text color', () => {
          cy.get('body h1').should('have.css', 'color', 'rgb(0, 0, 0)')
        })
      })

      context('Body: FAQ Fields', () => {
        it('The FAQ container is visible', () => {
          cy.get('.faq-container').should('be.visible')
        })

        it('There should be 5 FAQ text fields', () => {
          cy.get('.faq').should('have.length', 5);
        })

        context('Toggle button', () => {
          it('The button is clickable', () => {
            cy.get('.faq .faq-toggle').should('be.visible').click({ multiple: true }).click({ multiple: true })
            cy.get('.faq.active').should('have.length', 1);
          })
        })

        // FAQ field 1
        context('FAQ Field 1', () => {
          it('The FAQ container is visible', () => {
            cy.get('.faq.active').should('be.visible')
          })

          it('The title text is correct and visible', () => {
            cy.get('.faq-title')
            .first()
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim()
              expect(trimmedText).to.equal("Why shouldn't we trust atoms?")
            })
          })

          it('The answer is correct and visible', () => {
            cy.get('.faq-text')
            .first()
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim()
              expect(trimmedText).to.equal("They make up everything")
            })
          })
        })

        // FAQ field 2
        context('FAQ Field 2', () => {
          it('The FAQ container is visible', () => {
            cy.get('.faq').eq(1).should('be.visible')
          })

          it('The title text is correct and visible', () => {
            cy.get('.faq-title')
            .eq(1)
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim()
              expect(trimmedText).to.equal("What do you call someone with no body and no nose?")
            })
          })

          it('The answer is correct and visible', () => {
            cy.get('.faq-text')
            .eq(1)
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim()
              expect(trimmedText).to.equal("Nobody knows.")
            })
          })
        })

        // FAQ field 3
        context('FAQ Field 3', () => {
          it('The FAQ container is visible', () => {
            cy.get('.faq').eq(2).should('be.visible')
          })

          it('The title text is correct and visible', () => {
            cy.get('.faq-title')
            .eq(2)
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim()
              expect(trimmedText).to.equal("What\'s the object-oriented way to become wealthy?")
            })
          })

          it('The answer is correct and visible', () => {
            cy.get('.faq-text')
            .eq(2)
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim()
              expect(trimmedText).to.equal("Inheritance.")
            })
          })
        })

        // FAQ field 4
        context('FAQ Field 1', () => {
          it('The FAQ container is visible', () => {
            cy.get('.faq').eq(3).should('be.visible')
          })

          it('The title text is correct and visible', () => {
            cy.get('.faq-title')
            .eq(3)
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim()
              expect(trimmedText).to.equal("How many tickles does it take to tickle an octopus?")
            })
          })

          it('The answer is correct and visible', () => {
            cy.get('.faq-text')
            .eq(3)
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim()
              expect(trimmedText).to.equal("Ten-tickles!")
            })
          })
        })

        // FAQ field 5
        context('FAQ Field 1', () => {
          it('The FAQ container is visible', () => {
            cy.get('.faq').eq(4).should('be.visible')
          })

          it('The title text is correct and visible', () => {
            cy.get('.faq-title')
            .eq(4)
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim()
              expect(trimmedText).to.equal("What is: 1 + 1?")
            })
          })

          it('The answer is correct and visible', () => {
            cy.get('.faq-text')
            .eq(4)
            .invoke('text')
            .then((text) => {
              const trimmedText = text.trim()
              expect(trimmedText).to.equal("Depends on who are you asking.")
            })
          })
        })
      })
    })
  })
})
