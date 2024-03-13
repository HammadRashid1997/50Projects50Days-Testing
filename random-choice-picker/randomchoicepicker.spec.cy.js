describe('Project Random Choice Picker', () => {
  beforeEach('passes', () => {
    cy.visit('http://127.0.0.1:5500/random-choice-picker/index.html')
  })

  it('Opens the homepage', () => {

  })

  it('Screen is visible', () => {
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    context('Background', () => {
      it('The background is visible', () => {
        cy.get('body').should('be.visible')
      })

      it('The background has the correct color', () => {
        cy.get('body').should('be.visible').should('have.css', 'background-color', 'rgb(43, 136, 240)')
      })
    })

    context('Content', () => {
      it('The container is visible', () => {
        cy.get('.container').should('be.visible')
      })

      context('Title', () => {
        it('The title is visible', () => {
          cy.xpath('/html/body/div[1]/h3').should('be.visible')
        })

        it('The color of text is white', () => {
          cy.xpath('/html/body/div[1]/h3').should('be.visible').should('have.css', 'color', 'rgb(255, 255, 255)')
        })

        context('Line 1', () => {
          it('The line is visible and is correct', () => {
            cy.get('.container h3').invoke('text').and('contains', 'Enter all of the choices divided by a comma (\',\').')
          })
        })

        context('Line 2', () => {
          it('The line is visible and is correct', () => {
            cy.get('.container h3').invoke('text').and('contains', 'Press enter when you\'re done')
          })
        })
      })

      context('Textbox', () => {
        it('The text box is visible', () => {
          cy.xpath('//*[@id="textarea"]').should('be.visible')
        })

        it('The textbox has correct placeholder text', () => {
          cy.get('#textarea').should('have.attr', 'placeholder', 'Enter choices here...')
        })

        it('The textbox is clickable', () => {
          cy.xpath('//*[@id="textarea"]').should('be.visible').click()
        })

        it('The textbox accepts input', () => {
          cy.xpath('//*[@id="textarea"]').should('be.visible').click().type('Lorem Ipsum').type('{enter}')
        })

        it('The textbox accepts multiple word input as well', () => {
          cy.xpath('//*[@id="textarea"]').should('be.visible').click().type('$Dollar').type('{enter}')
        })

        it('The textbox accepts multiple inputs seperated by a comma', () => {
          cy.xpath('//*[@id="textarea"]').should('be.visible').click().type('$Dollar').type(',').type('200').type(',').type('Qwerty').type(',').type('400').type('{enter}')
        })

        it('The textbox chooses one value at random from the given choices', () => {
          cy.xpath('//*[@id="textarea"]').should('be.visible').click().type('$Dollar').type(',').type('200').type(',').type('Qwerty').type(',').type('400').type('{enter}')
          cy.xpath('//div[@id="tags"]//span[contains(@class, "tag") and contains(@class, "highlight")]')
        })

        it('The value chosen at random should have a blue background color', () => {
          cy.xpath('//*[@id="textarea"]').should('be.visible').click().type('$Dollar').type(',').type('200').type(',').type('Qwerty').type(',').type('400').type('{enter}')
          cy.xpath('//div[@id="tags"]//span[contains(@class, "tag") and contains(@class, "highlight")]').should('have.css', 'background-color', 'rgb(39, 60, 117)')
        })

        it('The values not chosen have an orange background color', () => {
          cy.xpath('//*[@id="textarea"]').should('be.visible').click().type('$Dollar').type(',').type('200').type(',').type('Qwerty').type(',').type('400').type('{enter}')
          cy.xpath('//div[@id="tags"]//span[contains(@class, "tag")]').should('have.css', 'background-color', 'rgb(240, 147, 43)')
        })

        it('There is only 1 option which is chosen', () => {
          const inputValues = ['$Dollar', '200', 'Qwerty', '400']     // Mixed inputs
          const n = inputValues.length
          cy.xpath('//*[@id="textarea"]').should('be.visible').click().type(inputValues.join(',')).type('{enter}')
          cy.xpath('//div[@id="tags"]//span[contains(@class, "tag") and contains(@class, "highlight")]').should('have.length', 1)
        })

        it('There are n - 1 options for the options not chosen', () => {
          const inputValues = ['$Dollar', '200', 'Qwerty', '400']     // Mixed inputs
          const n = inputValues.length
          cy.xpath('//*[@id="textarea"]').should('be.visible').click().type(inputValues.join(',')).type('{enter}')
          cy.xpath(`//div[@id="tags"]//span[contains(@class, "tag") and not(contains(@class, "highlight"))]`).should('have.length', n - 1)
        })
      })
    })
  })
})
