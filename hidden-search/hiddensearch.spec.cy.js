// Function to check if the body/background is visible
function backgrounBodyVisible() {
  it('Checks for the screen visibility', () => {
    cy.get('body').should('be.visible')
  })
}

describe('Project: Hidden Search', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/hidden-search/')
  })

  it('Opens the home page', () => {

  })

  it('Screen is visible', () => {
    backgrounBodyVisible()
  })

  context('Body', () => {
    it('Body is visible', () => {
      backgrounBodyVisible()
    })

    context('Background', () => {
      it('Background is visible', () => {
        backgrounBodyVisible()
      })

      it('Background color has Linear gradient', () => {
        cy.get('body').should('have.css', 'background-image')
        .and('contain', 'linear-gradient');
      })

      // Linear gradient is actually a background-image, always remember this jo tu bhool jaata hai hamesha
      it('Background has linear gradient color', () => {
        cy.get('body').should('have.css', 'background-image')
        .and('include', 'linear-gradient(90deg, rgb(125, 95, 255), rgb(113, 88, 226))');
      })
    })

    context('Search Bar', () => {
      it('The Search is visible', () => {
        cy.get('.search').should('be.visible')
      })

      it('The search icon is clickable', () => {
        cy.get('.btn').should('be.visible').click()
      })
    })
  })
})
