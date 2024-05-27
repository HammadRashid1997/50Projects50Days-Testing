import { ClientFunction, Selector } from "testcafe";

fixture('Sticky Navigation').page('http://127.0.0.1:5501/sticky-navigation/index.html')

test('The website opens', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The website has the body visible', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

// Navbar
test('The navbar is visible', async t => {
    const navbar = Selector('.nav')
    await t.expect(navbar.exists).ok()
})

test('The navbar has black background color', async t => {
    const navbar = Selector('.nav')
    const getNavbarColor = ClientFunction(() => {
        const navbarButton = document.querySelector('.nav')
        return navbarButton ? window.getComputedStyle(navbarButton).getPropertyValue('background-color') : null
    })

    const navbarColor = getNavbarColor()
    await t.expect(navbar.exists).ok().expect(navbarColor).eql('rgb(34, 34, 34)')
})

test('The navbar has the logo present', async t => {
    const logo = Selector('.logo')
    await t.expect(logo.exists).ok()
})

test('The logo is clickable', async t => {
    const logo = Selector('.logo')
    await t.expect(logo.exists).ok().click(logo)

    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The rest of the navbar links are visible', async t => {
    const listItems = Selector('ul li');
    for (let i = 0; i < await listItems.count; i++) {
        await t.expect(listItems.nth(i).visible).ok();
    }
})

// Hero section
test('The hero section is visible', async t => {
    const hero = Selector('.hero')
    await t.expect(hero.exists).ok()
})

test('The hero section has a background image attached', async t => {
    const backgroundElement = Selector('.hero');
    
    const getBackgroundImage = ClientFunction(() => {
        const element = document.querySelector('.hero');
        return element ? window.getComputedStyle(element).getPropertyValue('background-image'): null;
    });

    const backgroundImage = await getBackgroundImage();

    await t.expect(backgroundElement.exists).ok()
})

test('The heading text is visible', async t => {
    const heading = Selector('.hero .container h1')
    await t.expect(heading.exists).ok()
})

test('The text is correct', async t => {
    const heading = Selector('.hero .container h1')
    const text = 'Welcome To My Website'
    await t.expect(heading.exists).ok().expect(text).eql('Welcome To My Website')
})

test('The text has the correct color', async t => {
    const heading = Selector('.hero .container h1')
    const getHeadingColor = ClientFunction(() => {
        const headingButton = document.querySelector('.hero .container h1')
        return headingButton ? window.getComputedStyle(headingButton).getPropertyValue('color') : null
    })

    const navbarColor = getHeadingColor()
    await t.expect(heading.exists).ok().expect(navbarColor).eql('rgb(255, 255, 255)')
})

test('The body text is visible', async t => {
    const bodyText = Selector('.hero .container p')
    await t.expect(bodyText.exists).ok()
})

test('The text is correct', async t => {
    const bodyText = Selector('.hero .container p')
    const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?'
    await t.expect(bodyText.exists).ok().expect(text).eql('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur?')
})

test('The text has the correct color', async t => {
    const bodyText = Selector('.hero .container p')
    const getBodyTextColor = ClientFunction(() => {
        const headingButton = document.querySelector('.hero .container p')
        return headingButton ? window.getComputedStyle(headingButton).getPropertyValue('color') : null
    })

    const bodyTextColor = getBodyTextColor()
    await t.expect(bodyText.exists).ok().expect(bodyTextColor).eql('rgb(255, 255, 255)')
})

test('Scroll element into view', async t => {
    const element = Selector('.container.content'); 
    await t.scrollIntoView(element)
})

test('After I scroll down, the navbar is sticky', async t => {
    await t.scroll(0, 1000)
    const navbar = Selector('.nav.active')
    await t.expect(navbar.exists).ok()
})
