import { Selector, ClientFunction } from "testcafe";

fixture("Project Starter").page("http://127.0.0.1:5500/index.html");

test("The Home Page is Open and Visible", async (t) => {
  // Test code goes here
  const element = Selector("body");
  await t.expect(element.exists).ok().click(element);
});

test("The Home Page has the correct background color", async (t) => {
  const body = Selector("body");
  const getBodyColor = ClientFunction(() => {
    return window.getComputedStyle(document.body).getPropertyValue("color");
  });

  const bodyColor = await getBodyColor();

  await t.expect(body.exists).ok().expect(bodyColor).eql("rgb(0, 0, 0)");
});

test("The text is visible", async (t) => {
  const body = Selector("body");

  const bodyText = "Project Starter";

  await t.expect(body.exists).ok().expect(bodyText).eql("Project Starter");
});

test("The text has correct text color", async (t) => {
  const body = Selector("body");
  const getTextColor = ClientFunction(() => {
    return window.getComputedStyle(document.body).getPropertyValue("color");
  });

  const textColor = getTextColor();
  await t.expect(body.exists).ok().expect(textColor).eql("rgb(0, 0, 0)");
});
