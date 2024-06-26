import { ClientFunction, Selector } from "testcafe";

fixture('Password Generator').page('http://127.0.0.1:5501/password-generator/index.html')

// Start writing tests
test('The website opens in the browser', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The body is visible', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The background of the body color is visible and correct', async t => {
    const body = Selector('body')
    const getBodyColor = ClientFunction(() => {
        return window ? window.getComputedStyle(document.body).getPropertyValue('background-color') : null
    })
    const bodyColor = getBodyColor()
    await t.expect(body.exists).ok().expect(bodyColor).eql('rgb(59, 59, 152)')
})

// Password Generator container
test('The password container is visible', async t => {
    const passwordContainer = Selector('.container')
    await t.expect(passwordContainer.exists).ok()
})

test('The password container has the correct background color', async t => {
    const passwordContainer = Selector('.container')
    const getBackgroundContainerColor = ClientFunction(() => {
        const containerBackgroundColor = document.querySelector('.container')
        return containerBackgroundColor ? window.getComputedStyle(containerBackgroundColor).getPropertyValue('background-color') : null
    })
    const backgroundContainerColor = getBackgroundContainerColor()
    await t.expect(passwordContainer.exists).ok().expect(backgroundContainerColor).eql('rgb(35, 35, 91)')
})

// Heading Text
test('The password container has the heading visible', async t => {
    const heading = Selector('.container h2')
    await t.expect(heading.exists).ok()
})

test('The heading ahs the correct text', async t => {
    const heading = Selector('.container h2')
    const text = 'Password Generator'
    await t.expect(heading.exists).ok()
})

test('The heading text color is correct', async t => {
    const headingText = Selector('.container h2')
    const getTextColor = ClientFunction(() => {
        const headingTextColor = document.querySelector('.container h2')
        return headingTextColor ? window.getComputedStyle(headingTextColor).getPropertyValue('color') : null
    })
    const textColor = getTextColor()
    await t.expect(headingText.exists).ok().expect(textColor).eql('rgb(255, 255, 255)')
})

// Settings
test('The settings container is visible', async t => {
    const settings = Selector('.settings')
    await t.expect(settings.exists).ok()
})

test('Password length input field works correctly', async t => {
    const passwordLengthInput = Selector('#length');
    await t.selectText(passwordLengthInput).pressKey('delete');

    const newPasswordLength = 10;
    await t.typeText(passwordLengthInput, newPasswordLength.toString());

    const currentValue = await passwordLengthInput.value;
    await t.expect(currentValue).eql(newPasswordLength.toString());
})

test('Checkbox toggles uppercase letters inclusion correctly', async t => {
    const uppercaseCheckbox = Selector('#uppercase');
    await t.expect(uppercaseCheckbox.checked).ok();
    await t.click(uppercaseCheckbox);
    await t.expect(uppercaseCheckbox.checked).notOk();
})

test('Checkbox toggles lowercase letters inclusion correctly', async t => {
    const lowercaseCheckbox = Selector('#lowercase');
    await t.expect(lowercaseCheckbox.checked).ok();
    await t.click(lowercaseCheckbox);
    await t.expect(lowercaseCheckbox.checked).notOk();
});

test('Checkbox toggles numbers inclusion correctly', async t => {
    const numbersCheckbox = Selector('#numbers');
    await t.expect(numbersCheckbox.checked).ok();
    await t.click(numbersCheckbox);
    await t.expect(numbersCheckbox.checked).notOk();
})

test('Checkbox toggles symbols inclusion correctly', async t => {
    const symbolsCheckbox = Selector('#symbols');
    await t.expect(symbolsCheckbox.checked).ok();
    await t.click(symbolsCheckbox);
    await t.expect(symbolsCheckbox.checked).notOk();
})

test('Generate password after setting the password length', async t => {
    const passwordLengthInput = Selector('#length');
    await t.selectText(passwordLengthInput).pressKey('delete');

    const newPasswordLength = 10;
    await t.typeText(passwordLengthInput, newPasswordLength.toString());

    const generatePassword = Selector('#generate')
    await t.expect(generatePassword.exists).ok().click(generatePassword)
})
