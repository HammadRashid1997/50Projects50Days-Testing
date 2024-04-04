import { ClientFunction, Selector } from "testcafe";

fixture('Double Click Heart').page('http://127.0.0.1:5500/double-click-heart/index.html')

// The browser opens up and loads the page
test('The home page loads and opens up', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

// The background color of the home page is visible
test('The background color is visible', async t => {
    const body = Selector('body')
    const getBodyColor = ClientFunction(() => {
        const bodyButton = document.querySelector('body')
        return bodyButton ? window.getComputedStyle(bodyButton).getPropertyValue('background-color') : null
    })
    
    const bodyColor = getBodyColor()
    await t.expect(body.exists).ok().expect(bodyColor).eql('rgba(0, 0, 0, 0)')
})

// --------------------Content--------------------
// ---------------------Heading---------------------
test('The h3 heading text is visible', async t => {
    const heading = Selector('h3')
    await t.expect(heading.exists).ok()
})

// The heart icon is visible
test('The heart icon is visible', async t => {
    const heart = Selector('.fa-heart')
    await t.expect(heart.exists).ok()
})

// The heading text is correct
test('The heading text is correct', async t => {
    const heading = Selector('h3')
    const text = "Double click on the image to  it"
    await t.expect(heading.exists).ok().expect(text).eql('Double click on the image to  it')
})

// The heading text has correct color
test('The heading text has correct color', async t => {
    const heading = Selector('h3')
    const getTextColor = ClientFunction(() => {
        const textButton = document.querySelector('h3')
        return textButton ? window.getComputedStyle(textButton).getPropertyValue('color') : null
    })

    const textColor = getTextColor()
    await t.expect(heading.exists).ok().expect(textColor).eql('rgb(0, 0, 0)')

})

// The subtext is visible
test('The sub text is visible', async t => {
    const subText = Selector('small')
    await t.expect(subText.exists).ok()
})

// The subtext is correct
test('The subtext has the correct text mentioned', async t => {
    const subText = Selector('small')
    const text = 'You liked it  times'
    await t.expect(subText.exists).ok().expect(text).eql('You liked it  times')
})

// The sub text has the correct color
test('The heading text has correct color', async t => {
    const subText = Selector('small')
    const getTextColor = ClientFunction(() => {
        const textButton = document.querySelector('small')
        return textButton ? window.getComputedStyle(textButton).getPropertyValue('color') : null
    })

    const textColor = getTextColor()
    await t.expect(subText.exists).ok().expect(textColor).eql('rgb(0, 0, 0)')
})

// The image is visible
test('The image is visible', async t => {
    const image = Selector('.loveMe')
    await t.expect(image.exists).ok()
})

// The image when double clicked is possible
test('The double click on image is possible', async t => {
    const image = Selector('.loveMe')
    await t.expect(image.exists).ok().doubleClick(image)
})

// WHen I double click on the image, there is an increment of 1 in the like count
test('Increment by 1 when I double click on the image', async t => {
    const image = Selector('.loveMe')

    const likeCount = Selector('span')

    const initialLikeCount = await likeCount.textContent;

    await t.doubleClick(image);

    const updatedLikeCount = await likeCount.textContent;

    const initialLikeCountNumber = parseInt(initialLikeCount, 10);
    const updatedLikeCountNumber = parseInt(updatedLikeCount, 10);

    await t.expect(updatedLikeCountNumber).eql(initialLikeCountNumber + 1);
})
