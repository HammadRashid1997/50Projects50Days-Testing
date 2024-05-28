import { ClientFunction, Selector } from "testcafe";

fixture('Testimonial Box Switcher').page('http://127.0.0.1:5501/testimonial-box-switcher/index.html')

test('The website opens up', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The website has the correct background color', async t => {
    const body = Selector('body')
    const getBodyColor = ClientFunction(() => {
        return window.getComputedStyle(document.body).getPropertyValue('background-color')
    })

    const bodyColor = getBodyColor()
    await t.expect(body.exists).ok().expect(bodyColor).eql('rgb(244, 244, 244)')
})

test('The testimonial box container is visible', async t => {
    const testimonialContainer = Selector('.testimonial-container')
    await t.expect(testimonialContainer.exists).ok()
})

test('The testimonial container has the correct background color', async t => {
    const testimonialContainer = Selector('.testimonial-container')
    const getBackgroundContainerColor = ClientFunction(() => {
        const background = document.querySelector('.testimonial-container')
        return background ? window.getComputedStyle(background).getPropertyValue('background-color') : null
    })

    const backgroundContainerColor = getBackgroundContainerColor()
    await t.expect(testimonialContainer.exists).ok().expect(backgroundContainerColor).eql('rgb(71, 108, 228)')
})

test('The testimonial box has the progress bar', async t => {
    const progressbar = Selector('.progress-bar')
    await t.expect(progressbar.exists).ok()
})

test('The right and left quotes are visible', async t => {
    const rightQuote = Selector('.fas.fa-quote-right.fa-quote')
    await t.expect(rightQuote.exists).ok()

    const leftQuote = Selector('.fas.fa-quote-left.fa-quote')
    await t.expect(leftQuote.exists).ok()
})

test('The body text in the container is visible', async t => {
    const bodyText = Selector('.testimonial')
    await t.expect(bodyText.exists).ok()
})

test('The user profile and information is visible', async t => {
    const user = Selector('.user')
    await t.expect(user.exists).ok()
})
