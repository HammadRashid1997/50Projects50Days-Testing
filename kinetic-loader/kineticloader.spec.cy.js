describe('Kinetic Loader', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/kinetic-loader/index.html')
  })

  it('Opens the Home Page', () => {

  })

  it('Body is visible', () => {
    cy.get('body').should('be.visible')
  })

  it('The body color is visible', () => {
    cy.get('body').should('be.visible').should('have.css', 'background-color', 'rgb(44, 62, 80)')
  })

  context('Body', () => {
    it('The kinetic loader is visible', () => {
      cy.get('.kinetic').should('be.visible')
    })

    // it('Loader rotates as expected', () => {
    //   cy.get('.kinetic').should('be.visible').as('loader')
    //   cy.get('@loader').invoke('css', 'transform').then(initialTransform => {
    //     cy.wait(500);
    //     cy.get('@loader').invoke('css', 'transform').then(transformAfterWaiting => {
    //       expect(transformAfterWaiting).not.to.equal(initialTransform)
    //     })
    //   })
    // })
  })
})
