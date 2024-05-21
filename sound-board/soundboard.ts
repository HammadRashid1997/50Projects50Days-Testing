import { ClientFunction, Selector } from "testcafe";

fixture('Sound Board').page('http://127.0.0.1:5501/sound-board/index.html')

test('The website opens up', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The body should have the correct background color visible', async t => {
    const body = Selector('body')
    const getBodyColor = ClientFunction(() => {
        const bodyColorVisible = document.querySelector('body')
        return bodyColorVisible ? window.getComputedStyle(bodyColorVisible).getPropertyValue('background-color') : null
    })

    const bodyColor= getBodyColor()
    await t.expect(body.exists).ok().expect(bodyColor).eql('rgb(161, 100, 223)')
})

test('The body should have the container visible', async t => {
    const container = Selector('#buttons')
    await t.expect(container.exists).ok()
})

// Applause
test('The container for applause sound is visible', async t => {
    const applause = Selector('.btn').withText('applause')
    await t.expect(applause.exists).ok()
})

test('The text applause is correct and visible', async t => {
    const applause = Selector('.btn').withText('applause')
    const text = 'applause'
    await t.expect(applause.exists).ok().expect(text).eql('applause')
})

test('The text color is correct and visible', async t => {
    const applause = Selector('.btn').withText('applause')
    const getTextColor = ClientFunction(() => {
        const textColorVisible = document.querySelector('.btn')
        return textColorVisible ? window.getComputedStyle(textColorVisible).getPropertyValue('color') : null
    })

    const textColor= getTextColor()
    await t.expect(applause.exists).ok().expect(textColor).eql('rgb(255, 255, 255)')
})

test('The container is clickable and plays the sound', async t => {
    const applause = Selector('.btn').withText('applause')
    await t.expect(applause.exists).ok().click(applause)

    const audio = Selector('#applause')
    await t.expect(audio.exists).ok()
})

// Boo
test('The container for boo sound is visible', async t => {
    const boo = Selector('.btn').withText('boo')
    await t.expect(boo.exists).ok()
})

test('The text applause is correct and visible', async t => {
    const boo = Selector('.btn').withText('boo')
    const text = 'boo'
    await t.expect(boo.exists).ok().expect(text).eql('boo')
})

test('The text color is correct and visible', async t => {
    const boo = Selector('.btn').withText('boo')
    const getTextColor = ClientFunction(() => {
        const textColorVisible = document.querySelector('.btn')
        return textColorVisible ? window.getComputedStyle(textColorVisible).getPropertyValue('color') : null
    })

    const textColor= getTextColor()
    await t.expect(boo.exists).ok().expect(textColor).eql('rgb(255, 255, 255)')
})

test('The container is clickable and plays the sound', async t => {
    const boo = Selector('.btn').withText('boo')
    await t.expect(boo.exists).ok().click(boo)

    const audio = Selector('#boo')
    await t.expect(audio.exists).ok()
})

// Gasp
test('The container for gasp sound is visible', async t => {
    const gasp = Selector('.btn').withText('gasp')
    await t.expect(gasp.exists).ok()
})

test('The text gasp is correct and visible', async t => {
    const gasp = Selector('.btn').withText('gasp')
    const text = 'gasp'
    await t.expect(gasp.exists).ok().expect(text).eql('gasp')
})

test('The text color is correct and visible', async t => {
    const gasp = Selector('.btn').withText('gasp')
    const getTextColor = ClientFunction(() => {
        const textColorVisible = document.querySelector('.btn')
        return textColorVisible ? window.getComputedStyle(textColorVisible).getPropertyValue('color') : null
    })

    const textColor= getTextColor()
    await t.expect(gasp.exists).ok().expect(textColor).eql('rgb(255, 255, 255)')
})

test('The container is clickable and plays the sound', async t => {
    const gasp = Selector('.btn').withText('gasp')
    await t.expect(gasp.exists).ok().click(gasp)

    const audio = Selector('#gasp')
    await t.expect(audio.exists).ok()
})

// Tada
test('The container for tada sound is visible', async t => {
    const tada = Selector('.btn').withText('tada')
    await t.expect(tada.exists).ok()
})

test('The text applause is correct and visible', async t => {
    const tada = Selector('.btn').withText('tada')
    const text = 'tada'
    await t.expect(tada.exists).ok().expect(text).eql('tada')
})

test('The text color is correct and visible', async t => {
    const tada = Selector('.btn').withText('tada')
    const getTextColor = ClientFunction(() => {
        const textColorVisible = document.querySelector('.btn')
        return textColorVisible ? window.getComputedStyle(textColorVisible).getPropertyValue('color') : null
    })

    const textColor= getTextColor()
    await t.expect(tada.exists).ok().expect(textColor).eql('rgb(255, 255, 255)')
})

test('The container is clickable and plays the sound', async t => {
    const tada = Selector('.btn').withText('tada')
    await t.expect(tada.exists).ok().click(tada)

    const audio = Selector('#tada')
    await t.expect(audio.exists).ok()
})

// Victory
test('The container for victory sound is visible', async t => {
    const victory = Selector('.btn').withText('victory')
    await t.expect(victory.exists).ok()
})

test('The text applause is correct and visible', async t => {
    const victory = Selector('.btn').withText('victory')
    const text = 'victory'
    await t.expect(victory.exists).ok().expect(text).eql('victory')
})

test('The text color is correct and visible', async t => {
    const victory = Selector('.btn').withText('victory')
    const getTextColor = ClientFunction(() => {
        const textColorVisible = document.querySelector('.btn')
        return textColorVisible ? window.getComputedStyle(textColorVisible).getPropertyValue('color') : null
    })

    const textColor= getTextColor()
    await t.expect(victory.exists).ok().expect(textColor).eql('rgb(255, 255, 255)')
})

test('The container is clickable and plays the sound', async t => {
    const victory = Selector('.btn').withText('victory')
    await t.expect(victory.exists).ok().click(victory)

    const audio = Selector('#victory')
    await t.expect(audio.exists).ok()
})

// Wrong
test('The container for wrong sound is visible', async t => {
    const wrong = Selector('.btn').withText('wrong')
    await t.expect(wrong.exists).ok()
})

test('The text wrong is correct and visible', async t => {
    const wrong = Selector('.btn').withText('wrong')
    const text = 'wrong'
    await t.expect(wrong.exists).ok().expect(text).eql('wrong')
})

test('The text color is correct and visible', async t => {
    const wrong = Selector('.btn').withText('wrong')
    const getTextColor = ClientFunction(() => {
        const textColorVisible = document.querySelector('.btn')
        return textColorVisible ? window.getComputedStyle(textColorVisible).getPropertyValue('color') : null
    })

    const textColor= getTextColor()
    await t.expect(wrong.exists).ok().expect(textColor).eql('rgb(255, 255, 255)')
})

test('The container is clickable and plays the sound', async t => {
    const wrong = Selector('.btn').withText('wrong')
    await t.expect(wrong.exists).ok().click(wrong)

    const audio = Selector('#wrong')
    await t.expect(audio.exists).ok()
})
