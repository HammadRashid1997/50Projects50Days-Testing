import { query } from "express";
import { ClientFunction, Selector } from "testcafe";

fixture('Dad Jokes').page('http://127.0.0.1:5500/dad-jokes/index.html')

// -------------------Miscellaneous-------------------
// Opeing the browser and the home page
test('The browser shall open and the body should be visible', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

// The background color of the body is visible
test('The correct background color is visible', async t => {
    const body = Selector('body')
    const getBackgroundColor = ClientFunction(() => {
        const bodyButton = document.querySelector('body')
        return bodyButton ? window.getComputedStyle(bodyButton).getPropertyValue('background-color') : null;
    })

    const backgroundColor = getBackgroundColor()
    await t.expect(body.exists).ok().expect(backgroundColor).eql('rgb(104, 109, 224)')
})

// -------------------Container-------------------
// The container is visible
test('The container is visible', async t => {
    const container = Selector('.container')
    await t.expect(container.exists).ok();
})

// The conainer has white background color
test('The container has white background color', async t => {
    const body = Selector('.container')
    const getBackgroundColor = ClientFunction(() => {
        const bodyButton = document.querySelector('.container')
        return bodyButton ? window.getComputedStyle(bodyButton).getPropertyValue('background-color') : null;
    })

    const backgroundColor = getBackgroundColor()
    await t.expect(body.exists).ok().expect(backgroundColor).eql('rgb(255, 255, 255)')
})

test('The heading text is visible', async t => {
    const heading = Selector('h3')
    await t.expect(heading.exists).ok()
})

test('The heading ha correct text', async t => {
    const heading = Selector('h3')
    const text = 'Don\'t Laugh Challenge'
    await t.expect(heading.exists).ok().expect(text).eql('Don\'t Laugh Challenge')
})

test('The heading text has correct color', async t => {
    const heading = Selector('h3')
    const getTextColor = ClientFunction(() => {
        const textText = document.querySelector('h3')
        return textText ? window.getComputedStyle(textText).getPropertyValue('color') : null
    })

    const textColor = getTextColor()
    await t.expect(heading.exists).ok().expect(textColor).eql('rgb(0, 0, 0)')
})

test('The joke is present', async t => {
    const joke = Selector('#joke')
    await t.expect(joke.exists).ok()
})

test('The joke has the correct color', async t => {
    const joke = Selector('#joke')
    const getTextColor = ClientFunction(() => {
        const textText = document.querySelector('h3')
        return textText ? window.getComputedStyle(textText).getPropertyValue('color') : null
    })

    const textColor = getTextColor()
    await t.expect(joke.exists).ok().expect(textColor).eql('rgb(0, 0, 0)')
})

test('The button is visible', async t => {
    const button = Selector('#jokeBtn')
    await t.expect(button.exists).ok()
})

test('The joke button has purple background color', async t => {
    const button = Selector('#jokeBtn')
    const getButtonColor = ClientFunction(() => {
        const textText = document.querySelector('#jokeBtn')
        return textText ? window.getComputedStyle(textText).getPropertyValue('background-color') : null
    })

    const buttonColor = getButtonColor()
    await t.expect(button.exists).ok().expect(buttonColor).eql('rgb(159, 104, 224)')
})

test('The joke button has the text visible in it', async t => {
    const button = Selector('#jokeBtn')
    const text = 'Get Another Joke'
    await t.expect(button.exists).ok().expect(text).eql('Get Another Joke')
})

test('The text color is correct', async t => {
    const button = Selector('#jokeBtn')
    const getTextColor = ClientFunction(() => {
        const textText = document.querySelector('#jokeBtn')
        return textText ? window.getComputedStyle(textText).getPropertyValue('color') : null
    })

    const buttonColor = getTextColor()
    await t.expect(button.exists).ok().expect(buttonColor).eql('rgb(255, 255, 255)')
})

test('The button is clickable', async t => {
    const button = Selector('#jokeBtn')
    await t.expect(button.exists).ok().click(button)
})
