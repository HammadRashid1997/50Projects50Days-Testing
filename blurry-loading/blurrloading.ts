import { ClientFunction, Selector } from "testcafe";

fixture("Blurry Loading").page(
  "http://127.0.0.1:5500/blurry-loading/index.html"
);

// The first test is always how the browser loads and opens the application
test("The body is visible", async (t) => {
  const body = Selector("body");
  await t.expect(body.exists).ok();
});

test("The body has the correct background image attached", async (t) => {
  const body = Selector(".bg");
  const getBackgroundImage = ClientFunction(() => {
    const element = document.querySelector(".bg");
    const computedStyle = element ? window.getComputedStyle(element) : null;
    return computedStyle ? computedStyle.getPropertyValue("background-image") : null
  });

  const backgroundImage = await getBackgroundImage();

  await t
    .expect(backgroundImage)
    .contains(
      "https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80"
    );
});

// Blurry Loading starts from here
test("The website when opens starts loading", async (t) => {
  const loadingText = Selector(".loading-text");
  await t.expect(loadingText.exists).ok();
});

// test("Blurry loader progresses and fades out", async (t) => {
//   // Selector for the loading text and background elements
//   const loadText = Selector(".loading-text");
//   const bg = Selector(".bg");

//   // Initial opacity and blur values
//   let opacity = 1;
//   let blur = 30;

//   // Simulate loading process from 0% to 100%
//   for (let load = 0; load <= 100; load++) {
//     // Update the loading text to indicate progress
//     await t.expect(loadText.textContent).eql(`${load}%`);

//     // Verify that the opacity decreases as the loading progresses
//     await t.expect(opacity).gte(0);
//     await t.expect(opacity).lte(1);

//     // Verify that the blur decreases as the loading progresses
//     await t.expect(blur).gte(0);
//     await t.expect(blur).lte(30);

//     // Wait for a brief moment to simulate loading
//     await t.wait(30); // Adjust the wait time as needed

//     // Update opacity and blur values based on load percentage
//     opacity = scale(load, 0, 100, 1, 0);
//     blur = scale(load, 0, 100, 30, 0);
//   }

//   // Assert that the opacity becomes 0 (fully transparent) when loading is complete
//   await t.expect(opacity).eql(0);

//   // Assert that the blur becomes 0 when loading is complete
//   await t.expect(blur).eql(0);
// });
