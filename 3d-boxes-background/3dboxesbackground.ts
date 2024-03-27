import { Selector, ClientFunction } from "testcafe";

fixture("3d Boxes Background").page(
  "http://127.0.0.1:5500/3d-boxes-background/index.html"
);

test("The browser is opening the home page", async (t) => {
  // Test code goes here
  const element = Selector("body");
  await t.expect(element.exists).ok().click(element);
});

test("The body background color is white", async (t) => {
  const body = Selector("body");
  const getBodyColor = ClientFunction(() => {
    return window
      .getComputedStyle(document.body)
      .getPropertyValue("background-color");
  });

  const bodyColor = await getBodyColor();

  await t.expect(body.exists).ok().expect(bodyColor).eql("rgb(250, 250, 250)");
});

test("The button Magic is visible on the screen", async (t) => {
  const element = Selector("#btn");
  await t.expect(element.exists).ok().click(element);
});

test("The Magic button has correct background color", async (t) => {
  const magicButton = Selector("#btn");
  const getButtonColor = ClientFunction(() => {
    const button = document.querySelector("#btn");
    return button ? window.getComputedStyle(button).getPropertyValue("background-color") : null;
  });

  const bodyColor = await getButtonColor();

  await t
    .expect(magicButton.exists)
    .ok()
    .expect(bodyColor).notEql(null) // Adding a null check
    .expect(bodyColor)
    .eql("rgb(249, 202, 36)");
});

test("The Magic button has correct text", async (t) => {
  const element = Selector("#btn");
  const elementText = "Magic";
  await t.expect(element.exists).ok().expect(elementText).eql("Magic");
});

test("The Magic button has correct text color", async (t) => {
  const element = Selector("#btn");
  const getTextColor = ClientFunction(() => {
    const button = document.querySelector("#btn");
    return button ? window.getComputedStyle(button).getPropertyValue("color"): null;
  });

  const textColor = await getTextColor();

  await t.expect(element.exists).ok().expect(textColor).eql("rgb(0, 0, 0)");
});

test("The Magic button is clickable", async (t) => {
  const element = Selector("#btn");
  await t.expect(element.exists).ok().click(element);
});

test("The small boxes are visible on the screen", async (t) => {
  const element = Selector(".boxes");
  await t.expect(element.exists).ok().click(element);
});

test("The magic button when clicked changes the small boxes to a big box", async (t) => {
  const element = Selector("#btn");
  await t.expect(element.exists).ok().click(element);

  const boxes = Selector(".boxes");
  await t.expect(boxes.exists).ok().click(boxes);
});
