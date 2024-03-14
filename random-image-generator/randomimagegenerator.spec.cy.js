describe('Project Random Image Generator', () => {
  it('Opens the homepage', () => {
    cy.visit('http://127.0.0.1:5500/random-image-generator/index.html')
  })

  it('The screen is visible', () => {
    cy.visit('http://127.0.0.1:5500/random-image-generator/index.html')
    cy.get('body').should('be.visible')
  })

  context('Body', () => {
    context('Background', () => {
      it('The background is visible', () => {
        cy.visit('http://127.0.0.1:5500/random-image-generator/index.html')
        cy.get('body').should('be.visible')
      })
    })

    context('Heading title', () => {
      it('The title is visible', () => {
        cy.visit('http://127.0.0.1:5500/random-image-generator/index.html')
        cy.xpath('/html/body/h1').should('be.visible')
      })

      it('The title has correct color', () => {
        cy.visit('http://127.0.0.1:5500/random-image-generator/index.html')
        cy.xpath('/html/body/h1').should('be.visible').should('have.css', 'color', 'rgb(0, 0, 0)')
      })

      it('The title is correct', () => {
        cy.visit('http://127.0.0.1:5500/random-image-generator/index.html')
        cy.xpath('/html/body/h1').should('be.visible').should('have.text', 'Random Image Feed')
      })
    })

    context('Image Feed', () => {
      it('The images are visible', () => {
        cy.visit('http://127.0.0.1:5500/random-image-generator/index.html')
        cy.get('body').should('be.visible')
      })

      it('There are total 15 images on the screen', () => {
        cy.visit('http://127.0.0.1:5500/random-image-generator/index.html')
        cy.get('img').should('have.length', 15)
      })
    })
  })
})
