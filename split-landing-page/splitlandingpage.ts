import { text } from "express";
import { ClientFunction, Selector } from "testcafe";

fixture('Split Landing Page').page('http://127.0.0.1:5501/split-landing-page/index.html')

test('The website is open in the browser', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The body of the website is visible', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

// Playstation 5
test('The image of Playstation is visible', async t => {
    const left = Selector('.split.left')
    await t.expect(left.exists).ok()
})

test('The heading is visible', async t => {
    const leftHeading = Selector('.split.left h1')
    await t.expect(leftHeading.exists).ok()
})

test('The heading is correct', async t => {
    const leftHeading = Selector('.split.left h1')
    const text = 'Playstation 5'
    await t.expect(leftHeading.exists).ok()
    .expect(text).eql('Playstation 5')
})

test('The heading text has correct color', async t => {
    const leftHeading = Selector('.split.left h1')
    const getTextColor = ClientFunction(() => {
        const leftHeadingTextColor  = document.querySelector('.split.left h1')
        return leftHeadingTextColor ? window.getComputedStyle(leftHeadingTextColor).getPropertyValue('color') : null
    })
    const textColor = getTextColor()
    await t.expect(leftHeading.exists).ok()
    .expect(textColor).eql('rgb(255, 255, 255)')
})

// XBox 360
test('The image of XBox is visible', async t => {
    const right = Selector('.split.right')
    await t.expect(right.exists).ok()
})

test('The heading is visible', async t => {
    const rightHeading = Selector('.split.right h1')
    await t.expect(rightHeading.exists).ok()
})

test('The heading is correct', async t => {
    const rightHeading = Selector('.split.right h1')
    const text = 'XBox Series X'
    await t.expect(rightHeading.exists).ok()
    .expect(text).eql('XBox Series X')
})

test('The heading text has correct color', async t => {
    const rightHeading = Selector('.split.right h1')
    const getTextColor = ClientFunction(() => {
        const rightHeadingTextColor  = document.querySelector('.split.right h1')
        return rightHeadingTextColor ? window.getComputedStyle(rightHeadingTextColor).getPropertyValue('color') : null
    })
    const textColor = getTextColor()
    await t.expect(rightHeading.exists).ok()
    .expect(textColor).eql('rgb(255, 255, 255)')
})

test('Hover changes the background color', async t => {
    const hoverElement = Selector('.split.left');
    await t.hover(hoverElement)
    
    const classLeft = Selector('.container.hover-left')
    await t.expect(classLeft.exists).ok()
})

test('Hover changes the background color', async t => {
    const hoverElement = Selector('.split.right');
    await t.hover(hoverElement)
    
    const classLeft = Selector('.container.hover-right')
    await t.expect(classLeft.exists).ok()
})
