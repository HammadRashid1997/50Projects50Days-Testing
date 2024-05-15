import { text } from "express";
import { ClientFunction, Selector } from "testcafe";

fixture('Random Image Generator').page('http://127.0.0.1:5501/random-image-generator/index.html')

test('The website opens up in the browser', async t => {
    const body = Selector('body')
    return await t.expect(body.exists).ok()
})

test('The body color is visible', async t => {
    const body = Selector('body')
    const getBodyColor = ClientFunction(() => {
        return window ? window.getComputedStyle(document.body).getPropertyValue('background-color') : null
    })
    const bodyColor = getBodyColor()
    return await t.expect(body.exists).ok().expect(bodyColor).eql('rgba(0, 0, 0, 0)')
})

test('The heading text is visible', async t => {
    const heading = Selector('.title')
    await t.expect(heading.exists).ok()
})

test('The heading text is correct', async t => {
    const heading = Selector('.title')
    const text = 'Random Image Feed'
    await t.expect(heading.exists).ok().expect(text).eql('Random Image Feed')
})

test('The text has the correct color', async t => {
    const heading = Selector('.title')
    const getTextCOlor = ClientFunction(() => {
        const text_color = document.querySelector('.title')
        return text_color ? window.getComputedStyle(text_color).getPropertyValue('color') : null
    })
    const textColor = getTextCOlor()
    await t.expect(heading.exists).ok().expect(textColor).eql('rgb(0, 0, 0)')
})

test('The images are visible', async t => {
    const images = Selector('.container')
    await t.expect(images.exists).ok()
})

test('There are 15 images at a time shown', async t => {
    const images = Selector('.container')
    for (let i = 0; i < await images.count; i++) {
        await t.scrollIntoView(images.nth(i));
        await t.expect(images.nth(i).visible).ok();
    }
})
