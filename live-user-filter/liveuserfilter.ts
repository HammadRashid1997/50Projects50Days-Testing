import { ClientFunction, Selector } from "testcafe";

fixture('Live User Filter').page('http://127.0.0.1:5501/live-user-filter/index.html')

// Start writing tests here
test('The website opens and loads on the browser', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The body background color is visible and visible', async t => {
    const body = Selector('body')
    const getBodyColor = ClientFunction(() => {
        return window ? window.getComputedStyle(document.body).getPropertyValue('background-color') : null
    })

    const bodyColor = getBodyColor()
    await t.expect(body.exists).ok().expect(bodyColor).eql('rgb(248, 249, 253)')
})

test('The content is visible', async t => {
    const container = Selector('.container')
    await t.expect(container.exists).ok()
})

// Header Container
test('The header container header is visible', async t => {
    const header = Selector('.header')
    await t.expect(header.exists).ok()
})

test('The header background color is visible and correct', async t => {
    const header = Selector('.header')
    const getBodyColor = ClientFunction(() => {
        const backgroundColor = document.querySelector('.header')
        return backgroundColor ? window.getComputedStyle(backgroundColor).getPropertyValue('background-color') : null
    })

    const headerColor = getBodyColor()
    await t.expect(header.exists).ok().expect(headerColor).eql('rgb(62, 87, 219)')
})

// Header Text
// Heading Text
test('The header has the heading text visible', async t => {
    const headingText = Selector('.title')
    await t.expect(headingText.exists).ok()
})

test('The header heading text is correct', async t => {
    const headingText = Selector('.title')
    const text = 'Live User Filter'
    await t.expect(headingText.exists).ok().expect(text).eql('Live User Filter')
})

test('The header heading text has the correct color', async t => {
    const headerText = Selector('.title')
    const getHeaderTextColor = ClientFunction(() => {
        const textColor = document.querySelector('.title')
        return textColor ? window.getComputedStyle(textColor).getPropertyValue('color') : null
    })

    const headerTextColor = getHeaderTextColor()
    await t.expect(headerText.exists).ok().expect(headerTextColor).eql('rgb(255, 255, 255)')
})

// Body Text
test('The header body text is visible', async t => {
    const headingBodyText = Selector('.subtitle')
    await t.expect(headingBodyText.exists).ok()
})

test('The header body text is correct', async t => {
    const headingBodyText = Selector('.subtitle')
    const text = 'Search by name and/or location'
    await t.expect(headingBodyText.exists).ok().expect(text).eql('Search by name and/or location')
})

test('The header body text has the correct color', async t => {
    const headingBodyText = Selector('.subtitle')
    const getHeaderBodyTextColor = ClientFunction(() => {
        const textColor = document.querySelector('.subtitle')
        return textColor ? window.getComputedStyle(textColor).getPropertyValue('color') : null
    })

    const headerBodyTextColor = getHeaderBodyTextColor()
    await t.expect(headingBodyText.exists).ok().expect(headerBodyTextColor).eql('rgb(255, 255, 255)')
})

// Search bar
test('The search bar is visible', async t => {
    const searchBar = Selector('#filter')
    await t.expect(searchBar.exists).ok()
})

test('The placeholder text is visible', async t => {
    const searchBar = Selector('#filter')
    const placeholderText = 'Search'
    await t.expect(searchBar.exists).ok().expect(placeholderText).eql('Search')
})

test('The search bar takes in input', async t => {
    const textField = Selector('input[type="text"]');
    const inputText = 'Dex';

    await t.typeText(textField, inputText);
    
    const enteredText = await textField.value;
    await t.expect(enteredText).eql(inputText);
})

// Result container
test('The results container is visible', async t => {
    const result = Selector('#result')
    await t.expect(result.exists).ok()
})

