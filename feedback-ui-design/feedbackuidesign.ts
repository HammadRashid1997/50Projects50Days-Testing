import { ClientFunction, Selector } from "testcafe";

fixture('Feedback UI Design').page('http://127.0.0.1:5501/feedback-ui-design/index.html')

test("The browser is opening the home page", async (t) => {
    // Test code goes here
    const element = Selector("body");
    await t.expect(element.exists).ok().click(element);
});

test('The background has the correct color', async(t) => {
    const element = Selector('body')
    const getBodyColor = ClientFunction(() => {
        return window ? window.getComputedStyle(document.body).getPropertyValue('background-color') : null
    })

    const bodyColor = getBodyColor()
    await t.expect(element.exists).ok().expect(bodyColor).eql('rgb(254, 249, 242)')
})

test('The container is visible', async t => {
    const container = Selector('#panel')
    await t.expect(container.exists).ok()
})

test('The container has the correct background color', async t => {
    const element = Selector('.panel-container')
    const getBodyColor = ClientFunction(() => {
        const bodyContainer = document.querySelector('.panel-container')
        return bodyContainer ? window.getComputedStyle(bodyContainer).getPropertyValue('background-color') : null
    })
    const bodyColor = getBodyColor()
    await t.expect(element.exists).ok().expect(bodyColor).eql('rgb(255, 255, 255)')
})

test('The heading text is visible in the container', async t => {
    const headingText = Selector('strong')
    await t.expect(headingText.exists).ok()
})

test('The heading text is correct', async t => {
    const headingText = Selector('strong')
    const text = "How satisfied are you with our customer support performance?"
    await t.expect(headingText.exists).ok().expect(text).eql('How satisfied are you with our customer support performance?')
})

test('The heading text has the correct color', async t => {
    const headingText = Selector('strong')
    const getTextCOlor = ClientFunction(() => {
        const headingTextButton = document.querySelector('strong')
        return headingTextButton ? window.getComputedStyle(headingTextButton).getPropertyValue("color") : null;
    })
    const headingColor = await getTextCOlor()
    await t.expect(headingText.exists).ok()
    .expect(headingColor).eql('rgb(0, 0, 0)')
})

test('The button is visible',async (t) => {
    const button = Selector('#send')
    await t.expect(button.exists).ok()
})

test('The button has the correct background color', async t => {
    const button = Selector('#send')
    const getButtonColor = ClientFunction(() => {
        const headingTextButton = document.querySelector('#send')
        return headingTextButton ? window.getComputedStyle(headingTextButton).getPropertyValue("background-color") : null;
    })
    const buttonColor = await getButtonColor()
    await t.expect(button.exists).ok()
    .expect(buttonColor).eql('rgb(48, 45, 43)')
})

test('The button has the correct text in it', async t => {
    const headingText = Selector('#send')
    const text = "Send Review"
    await t.expect(headingText.exists).ok().expect(text).eql('Send Review')
})

test('The button text has the correct color', async t => {
    const buttonText = Selector('#send')
    const getTextCOlor = ClientFunction(() => {
        const headingTextButton = document.querySelector('#send')
        return headingTextButton ? window.getComputedStyle(headingTextButton).getPropertyValue("color") : null;
    })
    const headingColor = await getTextCOlor()
    await t.expect(buttonText.exists).ok()
    .expect(headingColor).eql('rgb(255, 255, 255)')
})

test('The button is clickable', async t => {
    const buttonText = Selector('#send')
    await t.expect(buttonText.exists).ok().click(buttonText)
})

test('The ratings container is visible', async t => {
    const container = Selector('.ratings-container')
    await t.expect(container.exists).ok()
})

test('Test Unhappy Rating Container', async t => {
    const unhappyContainer = Selector('.rating').withText('Unhappy');
    await t.expect(unhappyContainer.exists).ok();
});

test('Test Neutral Rating Container', async t => {
    const neutralContainer = Selector('.rating').withText('Neutral');
    await t.expect(neutralContainer.exists).ok();
});

test('Test Satisfied Rating Container', async t => {
    const satisfiedContainer = Selector('.rating').withText('Satisfied');
    await t.expect(satisfiedContainer.exists).ok();
});

// If the containers are clickable
test('Test Unhappy Rating Container is clickable', async t => {
    const unhappyContainer = Selector('.rating').withText('Unhappy');
    await t.expect(unhappyContainer.exists).ok().click(unhappyContainer)
});

test('Test Neutral Rating Container is clickable', async t => {
    const neutralContainer = Selector('.rating').withText('Neutral');
    await t.expect(neutralContainer.exists).ok().click(neutralContainer)
});

test('Test Satisfied Rating Container is clickable', async t => {
    const satisfiedContainer = Selector('.rating').withText('Satisfied');
    await t.expect(satisfiedContainer.exists).ok().click(satisfiedContainer)
});

// If the containers are clickable
test('Test Unhappy Rating Container is clickable', async t => {
    const unhappyContainer = Selector('.rating').withText('Unhappy');
    await t.expect(unhappyContainer.exists).ok().click(unhappyContainer)
    
    const result = Selector('.panel-container').withText('Unhappy')
    await t.expect(result.exists).ok()
});

test('Test Neutral Rating Container is clickable', async t => {
    const neutralContainer = Selector('.rating').withText('Neutral');
    await t.expect(neutralContainer.exists).ok().click(neutralContainer)

    const result = Selector('.panel-container').withText('Neutral')
    await t.expect(result.exists).ok()
});

test('Test Satisfied Rating Container is clickable', async t => {
    const satisfiedContainer = Selector('.rating').withText('Satisfied');
    await t.expect(satisfiedContainer.exists).ok().click(satisfiedContainer)

    const result = Selector('.panel-container').withText('Satisfied')
    await t.expect(result.exists).ok()
});
