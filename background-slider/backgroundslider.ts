import { ClientFunction, Selector } from "testcafe";

fixture("Background Slider").page(
  "http://127.0.0.1:5500/background-slider/index.html"
);

test("The browser opens the web application", async (t) => {
  const body = Selector("body");
  await t.expect(body.exists).ok();
});

test("The body has the correct color displayed and visible", async (t) => {
  const body = Selector("body");
  const getBodyBackgroundImage = ClientFunction(() => {
    return window.getComputedStyle(document.body).getPropertyValue("background-image");
    });
    const bodyBackgroundImage = await getBodyBackgroundImage();
    await t.expect(body.exists).ok();
    await t.expect(bodyBackgroundImage).notEql('');
});

test("The left arrow container is visible on the screen", async (t) => {
  const leftArrow = Selector("#left");
  await t.expect(leftArrow.exists).ok();
});

test("The left arrow in the container is visible on the screen", async (t) => {
  const leftArrow = Selector(".fa-arrow-left");
  await t.expect(leftArrow.exists).ok();
});

test("The right arrow container is visible on the screen", async (t) => {
  const rightArrow = Selector("#right");
  await t.expect(rightArrow.exists).ok();
});

test("The right arrow in the container is visible on the screen", async (t) => {
  const rightArrow = Selector(".fa-arrow-left");
  await t.expect(rightArrow.exists).ok();
});

// The arrows are clickable
test("The right arrow container is visible on the screen", async (t) => {
  const rightArrow = Selector("#right");
  await t.expect(rightArrow.exists).ok().click(rightArrow);
});

test("The right arrow container is visible on the screen", async (t) => {
  const leftArrow = Selector("#left");
  await t.expect(leftArrow.exists).ok().click(leftArrow);
});
