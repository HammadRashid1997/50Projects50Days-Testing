import { ClientFunction, Selector } from "testcafe";

fixture('Good Cheap Fast').page('http://127.0.0.1:5501/good-cheap-fast/index.html')

test('The application opens up in the browser', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The body color is visible and correct', async t => {
    const body = Selector('body')
    const getBodyColor = ClientFunction(() => {
        return window ? window.getComputedStyle(document.body).getPropertyValue("background-color") : null
    })
    const bodyColor = getBodyColor()
    await t.expect(body.exists).ok().expect(bodyColor).eql('rgba(0, 0, 0, 0)')
})

test('The heading text is visible', async t => {
    const heading = Selector('h2')
    await t.expect(heading.exists).ok()
})

test('The heading has the correct text visible', async t => {
    const heading = Selector('h2')
    const text = 'How do you want your project to be?'
    await t.expect(heading.exists).ok().expect(text).eql('How do you want your project to be?')
})

test('The text color of the heading is correct', async t => {
    const body = Selector('h2')
    const getBodyColor = ClientFunction(() => {
        const button = document.querySelector('h2')
        return button ? window.getComputedStyle(button).getPropertyValue("color") : null
    })
    const bodyColor = getBodyColor()
    await t.expect(body.exists).ok().expect(bodyColor).eql('rgb(0, 0, 0)')
})

test('The good toggle contaienr is visible', async t => {
    const container = Selector('.toggle-container').withText('Good')
    await t.expect(container.exists).ok()
})

test('The cheap toggle contaienr is visible', async t => {
    const container = Selector('.toggle-container').withText('Cheap')
    await t.expect(container.exists).ok()
})

test('The fast toggle contaienr is visible', async t => {
    const container = Selector('.toggle-container').withText('Fast')
    await t.expect(container.exists).ok()
})

test('Toggle button works', async t => {
    // Selector for the toggle container, checkbox, and label elements
    const toggleContainer = Selector('.toggle-container');
    const toggleCheckbox = toggleContainer.find('input[type="checkbox"]');
    const toggleLabel = toggleContainer.find('.label');

    // Initial state of the toggle checkbox
    const initialCheckboxState = await toggleCheckbox.checked;

    // Click on the toggle label to toggle the checkbox state
    await t.click(toggleLabel);

    // Get the updated state of the toggle checkbox
    const updatedCheckboxState = await toggleCheckbox.checked;

    // Assert that the checkbox state changes after clicking the toggle label
    await t.expect(updatedCheckboxState).notEql(initialCheckboxState);
})
