import { ClientFunction, Selector } from "testcafe";

fixture('Custom Range Slider').page('http://127.0.0.1:5500/custom-range-slider/index.html')

// Loads the home page
test('The browser loads and opens the home page', async t=> {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

// Check for the background image of the application
test('The body has the desired background color', async t=> {
    const body = Selector('body')
    const getBodyColor = ClientFunction(() => {
        const element = document.querySelector('body');
        const computedStyle = element ? window.getComputedStyle(element) : null;
        return computedStyle ? computedStyle.getPropertyValue('background-image') : null
    })

    const bodyColor = getBodyColor()
    await t.expect(bodyColor).notEql('');
})

// ----------------------Heading Text----------------------

// Check for the heading text
test('The heading text is visible', async t => {
    const text = Selector('h2')
    await t.expect(text.exists).ok()
})

// The heading text is correct
test('The heading text is correct', async t => {
    const text = Selector('h2')
    const textText = 'Custom Range Slider'
    await t.expect(text.exists).ok().expect(textText).eql("Custom Range Slider");
})

// The heading text has correct color
test('The heading text color is correct', async t => {
    const text = Selector('h2')
    const getTextColor = ClientFunction(() => {
        const button = document.querySelector("h2");
        return button ? window.getComputedStyle(button).getPropertyValue("color"): null;
      });
    
      const textColor = await getTextColor();
    
      await t.expect(text.exists).ok().expect(textColor).eql("rgb(0, 0, 0)");
})

// ----------------------Slider----------------------

// The slider is visible
test('The slider is visible', async t => {
    const slider = Selector('.range-container')
    await t.expect(slider.exists).ok()
})

test('Slider functionality', async t => {
    // Selector for the slider input element and its associated label
    const slider = Selector('#range');
    const label = Selector('label[for="range"]');

    // Simulate dragging the slider handle to different positions
    await t
        .click(slider) // Click on the slider to focus it
        .pressKey('right') // Move the slider handle to the right
        .expect(label.textContent).eql('51') // Verify that the label updates accordingly
        .pressKey('left') // Move the slider handle back to the left
        .expect(label.textContent).eql('50'); // Verify that the label updates accordingly
});

test('The slider has minimum and maximum values as 0 and 100 respectively', async t => {
    const slider = Selector('#range');
    const label = Selector('label[for="range"]');
    await t
        .click(slider) // Click on the slider to focus it
        .pressKey('home') // Move the slider handle to the leftmost position
        .expect(label.textContent).eql('0'); // Verify that the label updates to 0

    // Simulate setting the slider to the maximum value (100)
    await t
        .click(slider) // Click on the slider to focus it
        .pressKey('end') // Move the slider handle to the rightmost position
        .expect(label.textContent).eql('100');
})
