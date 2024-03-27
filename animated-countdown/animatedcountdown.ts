import { Selector, ClientFunction } from "testcafe";

fixture("Animated Countdown").page(
  "http://127.0.0.1:5500/animated-countdown/index.html"
);

// First test. This test will pass if the user is able to view the body of the application
test("The browser should open the home page", async (t) => {
  const bodyElement = Selector("body");
  await t.expect(bodyElement.exists).ok();
});

// Second Test. This will check the background color of the body
test("The homepage has the correct color displayed and visible", async (t) => {
  const bodyElement = Selector("body");
  const getBodyColor = ClientFunction(() => {
    return window.getComputedStyle(document.body).getPropertyValue("color");
  });
  const bodyColor = await getBodyColor();
  await t.expect(bodyElement.exists).ok().expect(bodyColor).eql("rgb(0, 0, 0)");
});

// Third Test. This will check the content of the body being visible
test("The content Get Ready is visible on the screen", async (t) => {
  const text = Selector(".counter h4");
  const textValue = "Get Ready";
  await t.expect(text.exists).ok().expect(textValue).eql("Get Ready");
});

test("The content Get Ready has correct color", async (t) => {
  const text = Selector(".counter h4");
  const getTextColor = ClientFunction(() => {
    const button = document.querySelector("h4");
    return button ? window.getComputedStyle(button).getPropertyValue("color") : null;
  });

  const textColor = await getTextColor();

  await t.expect(text.exists).ok().expect(textColor).eql("rgb(0, 0, 0)");
});

// The numbers are visible on the screen and the count down is moving
test("The numbers are visible", async (t) => {
  const numbers = Selector(".nums");
  const nums = numbers.find("span");
  await t
    .expect(numbers.exists)
    .ok()
    .expect(nums.count)
    .eql(4)
    .expect(nums.nth(0).textContent)
    .eql("3")
    .expect(nums.nth(1).textContent)
    .eql("2")
    .expect(nums.nth(2).textContent)
    .eql("1")
    .expect(nums.nth(3).textContent)
    .eql("0");
});

// The numbers have the correct color
test("The numbers have the correct color", async (t) => {
  const numbers = Selector(".nums");
  const nums = numbers.find("span");

  const getTextColor = ClientFunction(() => {
    const button = document.querySelector("span");
    return button ? window.getComputedStyle(button).getPropertyValue("color"): null;
  });

  const textColor = await getTextColor();

  await t.expect(nums.exists).ok().expect(textColor).eql("rgb(52, 152, 219)");
});

// The count down when finishes displays the Go text
test("The text Go is visible after the count down ends", async (t) => {
  const text = Selector(".final h1");
  await t.expect(text.exists).ok();
});

// The text Go is correct
test("The text Go has the correct text", async (t) => {
  const text = Selector(".final h1");
  const textText = "GO";
  await t.expect(text.exists).ok().expect(textText).eql("GO");
});

// The text Go has correct color
test("The text go has the correct color being displayed", async (t) => {
  const text = Selector(".final h1");
  const getTextColor = ClientFunction(() => {
    const button = document.querySelector(".final h1");
    return button ? window.getComputedStyle(button).getPropertyValue("color") : null;
  });

  const textColor = await getTextColor();
  await t.expect(text.exists).ok().expect(textColor).eql("rgb(0, 0, 0)");
});

// Replay button

// The Replay button is visible
test("The Replay button should be visible on the screen", async (t) => {
  const button = Selector("#replay");
  await t.expect(button.exists).ok();
});

// The button has correct background color
test("The background color of the button is correct and visible", async (t) => {
  const button = Selector("#replay");
  const getButtonColor = ClientFunction(() => {
    const button = document.querySelector("#replay");
    return button ? window.getComputedStyle(button).getPropertyValue("background-color") : null;
  });

  const buttonColor = await getButtonColor();
  await t
    .expect(button.exists)
    .ok()
    .expect(buttonColor)
    .eql("rgb(52, 152, 219)");
});

test("The Replay text is visible in the button", async (t) => {
  const text = Selector("#replay span");
  await t.expect(text.exists).ok();
});

// The button has correct background color
test("The text color of the text is correct and visible", async (t) => {
  const text = Selector("#replay span");
  const getTextColor = ClientFunction(() => {
    const button = document.querySelector("#replay span");
    return button ? window.getComputedStyle(button).getPropertyValue("color") : null;
  });

  const textColor = await getTextColor();
  await t.expect(text.exists).ok().expect(textColor).eql("rgb(240, 248, 255)");
});

test("The Replay button is clickable", async (t) => {
  const button = Selector("#replay");
  await t.expect(button.exists).ok({ timeout: 10000 }).click(button);
});

test("The Replay button when clicked plays the animation count down again", async (t) => {
  const button = Selector("#replay");
  await t.expect(button.exists).ok({ timeout: 10000 }).click(button);

  const text = Selector(".counter h4");
  await t.expect(text.exists).ok();
});
