// Test Cafe code

import { ClientFunction, Selector } from "testcafe"; // Importing the necessary functions and properties from the library TestCafe

fixture("Animated Navigation").page(
  "http://127.0.0.1:5500/animated-navigation/"
);

// First test. This test will pass if the user is able to view the body of the application
test("The browser should open the home page", async (t) => {
  const bodyElement = Selector("body");
  await t.expect(bodyElement.exists).ok();
});

// This test will pass if the user is able to view the background color of the application and the correct color is visible
test("The background color of the page is correct", async (t) => {
  const bodyElement = Selector("body");
  const getBodyColor = ClientFunction(() => {
    return window
      .getComputedStyle(document.body)
      .getPropertyValue("background-color");
  });
  const bodyColor = await getBodyColor();
  await t
    .expect(bodyElement.exists)
    .ok()
    .expect(bodyColor)
    .eql("rgb(235, 251, 255)");
});

test("The background image on the website is visible", async (t) => {
  const bodyElement = Selector("body");
  const getBodyImage = ClientFunction(() => {
    return window
      .getComputedStyle(document.body)
      .getPropertyValue("background-image");
  });

  const bodyBackgroundImage = await getBodyImage();
  await t
    .expect(bodyElement.exists)
    .ok()
    .expect(bodyBackgroundImage)
    .notEql(null);
});

test("The navbar is visible on the screen", async (t) => {
  const bodyElement = Selector("#nav");
  await t.expect(bodyElement.exists).ok();
});

test("The color of the navbar is white", async (t) => {
  const bodyElement = Selector("#nav");
  const getNavColor = ClientFunction(() => {
    return window
      .getComputedStyle(document.body)
      .getPropertyValue("background-color");
  });
  const navbarColor = await getNavColor();
  await t
    .expect(bodyElement.exists)
    .ok()
    .expect(navbarColor)
    .eql("rgb(235, 251, 255)");
});

// Home Tab in Navbar
test("The text home is visible", async (t) => {
  const homeLink = Selector("#nav.active ul li:nth-child(1) a");
  await t.expect(homeLink.exists).ok();
});

test("The text home has the correct spelling", async (t) => {
  const homeLink = Selector("#nav.active ul li:nth-child(1) a");
  await t.expect(homeLink.exists).ok().expect(homeLink.textContent).eql("Home");
});

test("The text home has the correct color", async (t) => {
  const homeLink = Selector("#nav.active ul li:nth-child(1) a");
  const getTextColor = ClientFunction(() => {
    const button = document.querySelector("#nav.active ul li:nth-child(1) a");
    return window.getComputedStyle(button).getPropertyValue("color");
  });

  const textColor = await getTextColor();
  await t.expect(homeLink.exists).ok().expect(textColor).eql("rgb(0, 0, 0)");
});

// Works Tab in Navbar
test("The text works is visible", async (t) => {
  const worksLink = Selector("#nav.active ul li:nth-child(2) a");
  await t.expect(worksLink.exists).ok();
});

test("The text works has the correct spelling", async (t) => {
  const worksLink = Selector("#nav.active ul li:nth-child(2) a");
  await t
    .expect(worksLink.exists)
    .ok()
    .expect(worksLink.textContent)
    .eql("Works");
});

test("The text works has the correct color", async (t) => {
  const worksLink = Selector("#nav.active ul li:nth-child(2) a");
  const getTextColor = ClientFunction(() => {
    const button = document.querySelector("#nav.active ul li:nth-child(2) a");
    return window.getComputedStyle(button).getPropertyValue("color");
  });

  const textColor = await getTextColor();
  await t.expect(worksLink.exists).ok().expect(textColor).eql("rgb(0, 0, 0)");
});

// About tab in Navbar
test("The text about is visible", async (t) => {
  const aboutLink = Selector("#nav.active ul li:nth-child(3) a");
  await t.expect(aboutLink.exists).ok();
});

test("The text about has the correct spelling", async (t) => {
  const aboutLink = Selector("#nav.active ul li:nth-child(3) a");
  await t
    .expect(aboutLink.exists)
    .ok()
    .expect(aboutLink.textContent)
    .eql("About");
});

test("The text about has the correct color", async (t) => {
  const aboutLink = Selector("#nav.active ul li:nth-child(3) a");
  const getTextColor = ClientFunction(() => {
    const button = document.querySelector("#nav.active ul li:nth-child(3) a");
    return window.getComputedStyle(button).getPropertyValue("color");
  });

  const textColor = await getTextColor();
  await t.expect(aboutLink.exists).ok().expect(textColor).eql("rgb(0, 0, 0)");
});

// Contact tab in Navbar
test("The text contact is visible", async (t) => {
  const contactLink = Selector("#nav.active ul li:nth-child(4) a");
  await t.expect(contactLink.exists).ok();
});

test("The text contact has the correct spelling", async (t) => {
  const contactLink = Selector("#nav.active ul li:nth-child(4) a");
  await t
    .expect(contactLink.exists)
    .ok()
    .expect(contactLink.textContent)
    .eql("Contact");
});

test("The text contact has the correct color", async (t) => {
  const contactLink = Selector("#nav.active ul li:nth-child(4) a");
  const getTextColor = ClientFunction(() => {
    const button = document.querySelector("#nav.active ul li:nth-child(4) a");
    return window.getComputedStyle(button).getPropertyValue("color");
  });

  const textColor = await getTextColor();
  await t.expect(contactLink.exists).ok().expect(textColor).eql("rgb(0, 0, 0)");
});

test("The navbar can be closed using a button", async (t) => {
  const activeNavbarButton = Selector("#nav.active");
  await t.expect(activeNavbarButton.exists).ok().click(activeNavbarButton);

  const inActiveNavbarButton = Selector("#nav");
  await t.expect(inActiveNavbarButton.exists).ok();
});

test("The navbar can be closed using a button", async (t) => {
  const activeNavbarButton = Selector("#nav.active");
  await t.expect(activeNavbarButton.exists).ok().click(activeNavbarButton);

  const inActiveNavbarButton = Selector("#nav");
  await t.expect(inActiveNavbarButton.exists).ok();
});
