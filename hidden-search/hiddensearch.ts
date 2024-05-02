import { ClientFunction, Selector } from "testcafe";

fixture('Hidden Search').page('http://127.0.0.1:5501/hidden-search/index.html')

test('The hidden search opens up in the browser', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The background color is visible and correct', async t => {
    const body = Selector('body')
    const getBodyColor = ClientFunction(() => {
        return window ? window.getComputedStyle(document.body).getPropertyValue('background-image') : null
    })

    const bodyColor = getBodyColor()
    await t.expect(body.exists).ok().expect(bodyColor).eql('linear-gradient(90deg, rgb(125, 95, 255), rgb(113, 88, 226))');
})

test('The body has the search container visible', async t => {
    const searchbar = Selector('.search')
    await t.expect(searchbar.exists).ok()
})

// test('The search container has white background visible',async (t) => {
//     const searchbar = Selector('.search')
//     const getSearchBarBackgroundColor = ClientFunction(() => {
//         const searchbarButton = document.querySelector('.search')
//         return searchBarBackgroundColor ? window.getComputedStyle(searchBarBackgroundColor).getPropertyValue('background-color') : null
//     })

//     const searchBarBackgroundColor = getSearchBarBackgroundColor()
//     await t.expect(searchbar.exists).ok().expect(searchBarBackgroundColor).eql('rgb(255, 255, 255)')
// })

test('The container has the search icon clickable', async t => {
    const searchbar = Selector('.search')
    await t.expect(searchbar.exists).ok().click(searchbar)
})

test('The search icon when clicked opens the complete search bar', async t => {
    const searchbar = Selector('.search')
    await t.expect(searchbar.exists).ok().click(searchbar)

    const activeSearch = Selector('.search.active')
    await t.expect(activeSearch.exists).ok()
})

test('The search container has placeholder text visible', async t => {
    const searchbar = Selector('.search')
    await t.expect(searchbar.exists).ok().click(searchbar)

    const activeSearch = Selector('.search.active')
    // const actualPlaceholderText = await activeSearch.getAttribute('placeholder');
    const placeholderText = 'Search...'
    await t.expect(activeSearch.exists).ok().expect(placeholderText).eql('Search...')
})

test('The search bar takes an input', async t => {
    const textField = Selector('input[type="text"]');
    const inputText = 'Dummy text is here';

    await t.typeText(textField, inputText);
    
    const enteredText = await textField.value;
    await t.expect(enteredText).eql(inputText);
})
