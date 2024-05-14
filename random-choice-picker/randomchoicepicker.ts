import { text } from "express";
import { ClientFunction, Selector } from "testcafe";

fixture('Random Choice Picker').page('http://127.0.0.1:5501/random-choice-picker/index.html')

test('The webiste opens up in the browser', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The body color is visible and correct', async t => {
    const body = Selector('body')
    const getBodyColor = ClientFunction(() => {
        const bodyBackgroundColor = document.querySelector('body')
        return bodyBackgroundColor ? window.getComputedStyle(bodyBackgroundColor).getPropertyValue('background-color') : null
    })

    const bodyColor = getBodyColor()
    await t.expect(body.exists).ok().expect(bodyColor).eql('rgb(43, 136, 240)')
})

test('The container is visible', async t => {
    const container = Selector('.container')
    await t.expect(container.exists).ok()
})

test('The container has the heading text visible', async t => {
    const container = Selector('.container h3')
    const text = 'Enter all of the choices divided by a comma (\',\'\).  Press enter when you\'re done'
    await t.expect(container.exists).ok().expect(text).eql('Enter all of the choices divided by a comma (\',\'\).  Press enter when you\'re done')
})

test('The text color is visible and correct', async t => {
    const container = Selector('.container h3')
    const getTextColor = ClientFunction(() => {
        const text_Color = document.querySelector('.container h3')
        return text_Color ? window.getComputedStyle(text_Color).getPropertyValue('color') : null
    })

    const textColor = getTextColor()
    await t.expect(container.exists).ok().expect(textColor).eql('rgb(255, 255, 255)')
})

test('The text area is visible', async t => {
    const textArea = Selector('#textarea')
    await t.expect(textArea.exists).ok()
})

test('The text area has the placeholder text visible', async t => {
    const textArea = Selector('#textarea')
    const placeholderText = 'Enter choices here...'
    await t.expect(textArea.exists).ok().expect(placeholderText).eql('Enter choices here...')
})

test('The text area is clickable', async t => {
    const textArea = Selector('#textarea')
    await t.expect(textArea.exists).ok().click(textArea)
})

test('The text area takes in input separated by a comma', async t => {
    const textArea = Selector('#textarea')
    await t.expect(textArea.exists).ok().click(textArea)
})

test('Textarea accepts input separated by commas and presses enter', async t => {
    const textarea = Selector('textarea')

    const inputText = 'apple, banana, orange, peach, watermelon, pineapple, kiwi'

    await t.typeText(textarea, inputText, { replace: true })

    await t.pressKey('enter')
})

test('Once the choices are added, the tags are visible', async t => {
    const textarea = Selector('textarea')
    const inputText = 'apple, banana, orange, peach, watermelon, pineapple, kiwi'
    await t.typeText(textarea, inputText, { replace: true })
    await t.pressKey('enter')

    await t.wait(5000)

    const tags = Selector('#tags')
    await t.expect(tags.exists).ok()
})

test('Once the choices are added, one tag is selected at random', async t => {
    const textarea = Selector('textarea')
    const inputText = 'apple, banana, orange, peach, watermelon, pineapple, kiwi'
    await t.typeText(textarea, inputText, { replace: true })
    await t.pressKey('enter')

    await t.wait(10000)

    const tagHighlight = Selector('.tag.highlight')
    await t.expect(tagHighlight.exists).ok()
})
