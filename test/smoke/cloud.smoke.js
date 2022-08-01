const cloudHomePage = require("../../app/page-objects/cloud-home-page");

describe("Adding to estimate and displaying it", () => {
  it("add to estimate", async () => {
    await cloudHomePage.open();
    await cloudHomePage.forSmokeTest();
  });

  it("displayed result block", async () => {
    await cloudHomePage.resultBlock.waitForDisplayed();
    expect(await cloudHomePage.resultBlock).toBeDisplayed();
  });
});
