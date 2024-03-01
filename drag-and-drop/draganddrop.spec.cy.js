describe('Project: Drag-n-Drop', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/drag-n-drop/index.html')
  })

  it('Opens the Home Page', () => {

  })

  it('The body is visible', () => {
    cy.get('body').should('be.visible')
      .should('have.css', 'background-color', 'rgb(70, 130, 180)')
  })

  context('Body', () => {
    context('Content', () => {
      it('The containers are visible', () => {
        cy.xpath('/html/body/div[1]').should('be.visible')
        cy.xpath('/html/body/div[2]').should('be.visible')
        cy.xpath('/html/body/div[3]').should('be.visible')
        cy.xpath('/html/body/div[4]').should('be.visible')
        cy.xpath('/html/body/div[5]').should('be.visible')
      })

      it('The first container has an image in it', () => {
        cy.xpath('/html/body/div[1]/div').should('be.visible')
      })

      it('The image is dragable', () => {
        cy.xpath('/html/body/div[1]').should('be.visible').as('sourceContainer')
        cy.xpath('/html/body/div[3]').should('be.visible').as('targetContainer')

        cy.xpath('/html/body/div[1]/div').as('imageToDrag')

        cy.get('@targetContainer').then(($targetContainer) => {
          const targetRect = $targetContainer[0].getBoundingClientRect()
          const targetX = targetRect.x + targetRect.width / 2
          const targetY = targetRect.y + targetRect.height / 2

          // Trigger the drag start event on the image
          cy.get('@imageToDrag').trigger('mousedown', { button: 0 })

          // Trigger the drag event on the target container
          cy.get('body').trigger('mousemove', { clientX: targetX, clientY: targetY })

          // Trigger the drop event on the target container
          cy.get('@targetContainer').trigger('mouseup', { force: true })
        })

        // Assertion to confirm the image is now in the target container
        cy.get('@targetContainer').find('div').should('exist')
      })
    })
  })
})
