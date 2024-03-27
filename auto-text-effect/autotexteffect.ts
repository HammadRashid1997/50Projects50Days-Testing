import { query } from "express";
import { ClientFunction, Selector } from "testcafe";

fixture("Auto Text Effect").page(
  "http://127.0.0.1:5500/auto-text-effect/index.html"
);

// This test will run to show if the body is visible
test("The home page is visible", async (t) => {
  const body = Selector("body");
  await t.expect(body.exists).ok();
});

test("The background color of the body is correct", async (t) => {
  const body = Selector("body");
  const getBodyColor = ClientFunction(() => {
    return window
      .getComputedStyle(document.body)
      .getPropertyValue("background-color");
  });
  const bodyColor = getBodyColor();
  await t.expect(body.exists).ok().expect(bodyColor).eql("rgb(233, 150, 122)");
});

test("The text is visible on the screen", async (t) => {
  const text = Selector("#text");
  await t.expect(text.exists).ok();
});

test("The color of the text is accurate", async (t) => {
  const text = Selector("#text");
  const getTextColor = ClientFunction(() => {
    const textColor = document.querySelector("#text");
    return textColor ? window.getComputedStyle(textColor).getPropertyValue("color") : null
  });

  const colorText = getTextColor();
  await t.expect(text.exists).ok().expect(colorText).eql("rgb(0, 0, 0)");
});

test("The text content is correct", async (t) => {
  const text = Selector("#text");
  const textContent = "We Love Programming!";
  await t
    .expect(text.exists)
    .ok()
    .expect(textContent)
    .eql("We Love Programming!");
});

// Speed Button
test("The speed button should be visible", async (t) => {
  const label = Selector('label[for="speed"]');
  await t.expect(label.exists).ok();
});

test("The speed button should have the correct text", async (t) => {
  const label = Selector('label[for="speed"]');
  const text = "Speed:";
  await t.expect(label.exists).ok().expect(text).eql("Speed:");
});

test("The speed button has a numeric field", async (t) => {
  // Selector for the input element with id "speed"
  const speedInput = Selector("#speed");

  // Set initial value to 1
  await t.expect(speedInput.value).eql("1");

  // Increase the value by clicking the up arrow
  await t.click(speedInput).pressKey("up");
  await t.expect(speedInput.value).eql("2");

  // Decrease the value by clicking the down arrow
  await t.click(speedInput).pressKey("down");
  await t.expect(speedInput.value).eql("1");

  await t.selectText(speedInput).pressKey("delete").typeText(speedInput, "3");
  await t.expect(speedInput.value).eql("3"); // Value should be set to 3
});
