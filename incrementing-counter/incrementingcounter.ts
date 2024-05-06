import { text } from "express";
import { ClientFunction, Selector } from "testcafe";

fixture('Incrementing Counter').page('http://127.0.0.1:5501/incrementing-counter/index.html')

// Start writing tests in TypeScript
test('The website opens up and loads', async t => {
    const body = Selector('body')
    await t.expect(body.exists).ok()
})

test('The body has the visible backhground color', async t => {
    const body = Selector('body')
    const getBodyColor = ClientFunction(() => {
        return window ? window.getComputedStyle(document.body).getPropertyValue('background-color') : null
    })

    const bodyColor = getBodyColor()
    await t.expect(body.exists).ok().expect(bodyColor).eql('rgb(142, 68, 173)')
})

// Twitter Followers
test('The twitter followers container is visible', async t => {
    const twitter = Selector('.counter-container').withText('Twitter Followers')
    await t.expect(twitter.exists).ok()
})

test('The Twitter icon is visible', async t => {
    const icon = Selector('.fab.fa-twitter.fa-3x')
    await t.expect(icon.exists).ok()
})

test('The text Twitter followers is visible', async t => {
    const twitter = Selector('.counter-container').withText('Twitter Followers')
    const text = "Twitter Followers"
    await t.expect(twitter.exists).ok().expect(text).eql('Twitter Followers')
})

test('The color of the text is correct', async t  => { 
    const twitter = Selector('.counter-container').withText('Twitter Followers')
    const getTextColor = ClientFunction(() => {
        const component = document.querySelector('.counter-container')
        return component ? window.getComputedStyle(component).getPropertyValue('color') : null
    })

    const textColor = getTextColor()
    await t.expect(twitter.exists).ok().expect(textColor).eql('rgb(255, 255, 255)')
})

test('The twitter increment counter is visible', async t => {
    const counter = Selector('.counter[data-target="12000"]');
    await t.expect(counter.exists).ok();
});

test('The twitter counter value is white in color', async t => {
    const counter = Selector('.counter[data-target="12000"]');
    await t.expect(counter.getStyleProperty('color')).eql('rgb(255, 255, 255)');
});

test('The value of the twitter counter should not exceed 12000', async t => {
    const counter = Selector('.counter[data-target="12001"]');
    await t.expect(counter.exists).notOk();
});

test('The value of the twitter counter should not be less than 0', async t => {
    const counter = Selector('.counter[data-target="-1"]');
    await t.expect(counter.exists).notOk();
});

// Youtube Followers
test('The Youtube followers container is visible', async t => {
    const youtube = Selector('.counter-container').withText('YouTube Subscribers')
    await t.expect(youtube.exists).ok()
})

test('The Youtube icon is visible', async t => {
    const icon = Selector('.fab.fa-youtube.fa-3x')
    await t.expect(icon.exists).ok()
})

test('The text Youtube followers is visible', async t => {
    const youtube = Selector('.counter-container').withText('YouTube Subscribers')
    const text = "YouTube Subscribers"
    await t.expect(youtube.exists).ok().expect(text).eql('YouTube Subscribers')
})

test('The color of the text is correct', async t  => { 
    const youtube = Selector('.counter-container').withText('YouTube Subscribers')
    const getTextColor = ClientFunction(() => {
        const component = document.querySelector('.counter-container')
        return component ? window.getComputedStyle(component).getPropertyValue('color') : null
    })

    const textColor = getTextColor()
    await t.expect(youtube.exists).ok().expect(textColor).eql('rgb(255, 255, 255)')
})

test('The youtube increment counter is visible', async t => {
    const counter = Selector('.counter[data-target="5000"]');
    await t.expect(counter.exists).ok();
});

test('The youtube counter value is white in color', async t => {
    const counter = Selector('.counter[data-target="5000"]');
    await t.expect(counter.getStyleProperty('color')).eql('rgb(255, 255, 255)');
});

test('The value of the youtube counter should not exceed 12000', async t => {
    const counter = Selector('.counter[data-target="5001"]');
    await t.expect(counter.exists).notOk();
});

test('The value of the youtube counter should not be less than 0', async t => {
    const counter = Selector('.counter[data-target="-1"]');
    await t.expect(counter.exists).notOk();
});

// Facebook Fans
test('The Facebook followers container is visible', async t => {
    const facebook = Selector('.counter-container').withText('Facebook Fans')
    await t.expect(facebook.exists).ok()
})

test('The Facebook icon is visible', async t => {
    const icon = Selector('.fab.fa-facebook.fa-3x')
    await t.expect(icon.exists).ok()
})

test('The text Facebook followers is visible', async t => {
    const facebook = Selector('.counter-container').withText('Facebook Fans')
    const text = "Facebook Fans"
    await t.expect(facebook.exists).ok().expect(text).eql('Facebook Fans')
})

test('The color of the text is correct', async t  => { 
    const facebook = Selector('.counter-container').withText('Facebook Fans')
    const getTextColor = ClientFunction(() => {
        const component = document.querySelector('.counter-container')
        return component ? window.getComputedStyle(component).getPropertyValue('color') : null
    })

    const textColor = getTextColor()
    await t.expect(facebook.exists).ok().expect(textColor).eql('rgb(255, 255, 255)')
})

test('The facebook increment counter is visible', async t => {
    const counter = Selector('.counter[data-target="7500"]');
    await t.expect(counter.exists).ok();
});

test('The facebook counter value is white in color', async t => {
    const counter = Selector('.counter[data-target="7500"]');
    await t.expect(counter.getStyleProperty('color')).eql('rgb(255, 255, 255)');
});

test('The value of the facebook counter should not exceed 12000', async t => {
    const counter = Selector('.counter[data-target="7501"]');
    await t.expect(counter.exists).notOk();
});

test('The value of the facebook counter should not be less than 0', async t => {
    const counter = Selector('.counter[data-target="-1"]');
    await t.expect(counter.exists).notOk();
});
