import { ClientFunction, Selector } from "testcafe";

const url = 'http://127.0.0.1:5500/button-ripple-effect/'

fixture('Button Ripple Effect').page(url)

// Page opens in the browser
test('The home page opens up', async t => {
    const body = Selector('body');
    await t.expect(body.exists).ok();
});


// Page has the correct background color
test('The home page has the correct background color', async t => {
    const body = Selector('button')
    const getBodyColor = ClientFunction(() => {
        const bodyButton = document.querySelector('body')
        return bodyButton ? window.getComputedStyle(bodyButton).getPropertyValue('background-color') : null;
    })

    const bodyColor = getBodyColor()
    await t.expect(body.exists).ok().expect(bodyColor).eql('rgb(0, 0, 0)')
})

// Page has the button present on it
test('The home page has the button present on it', async t => {
    const button = Selector('.ripple')
    await t.expect(button.exists).ok()
})

// The button has the correct background color
test('The button has the correct background color', async t => {
    const button = Selector('.ripple')
    const getButtonColor = ClientFunction(() => {
        const buttonElement = document.querySelector('.ripple')
        return buttonElement ? window.getComputedStyle(buttonElement).getPropertyValue('background-color') : null
    })
    const buttonColor = getButtonColor()
    await t.expect(button.exists).ok().expect(buttonColor).eql('rgb(128, 0, 128)')
})

// The button has the correct background color
test('The button has the correct border color', async t => {
    const button = Selector('.ripple')
    const getButtonBorderColor = ClientFunction(() => {
        const buttonElement = document.querySelector('.ripple')
        return buttonElement ? window.getComputedStyle(buttonElement).getPropertyValue('border') : null
    })
    const buttonColor = getButtonBorderColor()
    await t.expect(button.exists).ok().expect(buttonColor).eql('1px solid rgb(128, 0, 128)')
})

// The button has the correct text written in it
test('The button has the text visible in it', async t => {
    const button = Selector('.ripple')
    const elementText = "Click Me";
    await t.expect(button.exists).ok().expect(elementText).eql("Click Me");

})

// The button has the correct text color
test('The button has the correct text color', async t => {
    const button = Selector('.ripple')
    const getButtonTextColor = ClientFunction(() => {
        const buttonElement = document.querySelector('.ripple')
        return buttonElement ? window.getComputedStyle(buttonElement).getPropertyValue('color') : null
    })
    const buttonTextColor = getButtonTextColor()
    await t.expect(button.exists).ok().expect(buttonTextColor).eql('rgb(255, 255, 255)')
})

// The button is clickable
test('The button is clickable', async t => {
    const button = Selector('.ripple')
    await t.expect(button.exists).ok().click(button);
})

// The button when clicked gives a ripple effect
test('The button gives a ripple effect', async t => {
    const buttons = Selector('.ripple');

    // Simulate clicking each button to trigger the ripple effect
    for (let i = 0; i < await buttons.count; i++) {
        const button = buttons.nth(i);
        
        // Simulate a click on the button
        await t.click(button);

        // Assert that the circle element is created
        const circle = await button.find('.circle');
        await t.expect(circle.exists).ok();

        // Wait for 500ms to simulate the time it takes for the circle to be removed
        await t.wait(500);

        // Assert that the circle element is removed after 500ms
        await t.expect(circle.exists).notOk();
    }
})
