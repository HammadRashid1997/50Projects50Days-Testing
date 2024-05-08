import { ClientFunction, Selector } from "testcafe";

fixture('Netflix Mobile Navigation').page('http://127.0.0.1:5501/netflix-mobile-navigation/index.html')

test('The website opens up in the browser', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The color of the background is visible and correct', async t => {
    const body = Selector('body')
    const getBodyColor = ClientFunction(() => {
        return window ? window.getComputedStyle(document.body).getPropertyValue('background-color') : null
    })
    const bodyColor = getBodyColor()
    await t.expect(body.exists).ok().expect(bodyColor).eql('rgba(0, 0, 0, 0)')
})

test('The Netflix logo is visible', async t => {
    const logo = Selector('.logo')
    await t.expect(logo.exists).ok()
})

test('The text below the logo is visible', async t => {
    const textBelowLogo = Selector('.text')
    await t.expect(textBelowLogo.exists).ok()
})

test('The text below logo is correct', async t => {
    const textBelowLogo = Selector('.text')
    const text = "Mobile Navigation"
    await t.expect(textBelowLogo.exists).ok().expect(text).eql('Mobile Navigation')
})

test('The color of the text below logo is correct', async t => {
    const textBelowLogo = Selector('.text')
    const getTextColor = ClientFunction(() => {
        const textBelowLogoText = document.querySelector('.text')
        return textBelowLogoText ? window.getComputedStyle(textBelowLogoText).getPropertyValue('color') : null
    })
    const textColor = getTextColor()
    await t.expect(textBelowLogo.exists).ok().expect(textColor).eql('rgb(0, 0, 0)')
})

test('The hamburger menu is visible', async t => {
    const hamburgerMenu = Selector('.nav-btn.open-btn')
    await t.expect(hamburgerMenu.exists).ok()
})

test('The hamburger menu is clickable', async t => {
    const hamburgerMenu = Selector('.nav-btn.open-btn')
    await t.expect(hamburgerMenu.exists).ok().click(hamburgerMenu)
})

test('When I click on the hamburger menu, it expands the contents for me', async t => {
    const hamburgerMenu = Selector('.nav-btn.open-btn')
    await t.expect(hamburgerMenu.exists).ok().click(hamburgerMenu)

    const content = Selector('.nav.nav-black.visible')
    await t.expect(content.exists).ok()
})

test('The logo is visible when I click on the hamburger menu', async t => {
    const hamburgerMenu = Selector('.nav-btn.open-btn')
    await t.expect(hamburgerMenu.exists).ok().click(hamburgerMenu)

    const logo = Selector('.logo')
    await t.expect(logo.exists).ok()
})

test('The close button is visible', async t => {
    const closeButton = Selector('.nav-btn.close-btn')
    await t.expect(closeButton.exists).ok()
})

test('The close button is clickable', async t => {
    const hamburgerMenu = Selector('.nav-btn.open-btn')
    await t.expect(hamburgerMenu.exists).ok().click(hamburgerMenu)

    const closeButton = Selector('.nav-btn.close-btn')
    await t.expect(closeButton.exists).ok().click(closeButton)
})

test('The close button when clicked closes the navgation sidebar', async t => {
    const hamburgerMenu = Selector('.nav-btn.open-btn')
    await t.expect(hamburgerMenu.exists).ok().click(hamburgerMenu)

    const closeButtonHide = Selector('.nav.nav-black')
    await t.expect(closeButtonHide.exists).ok()
})

test('The content is present', async t => {
    const list = Selector('.list')
    await t.expect(list.exists).ok()
})

test('Text in each line is present', async t => {
    const listItems = Selector('.list li')
    for (let i = 0; i < await listItems.count; i++) {
        const listItemText = await listItems.nth(i).textContent
        await t.expect(listItemText.trim()).notEql('')
    }
})

