const pastebinHomePage = require("../../app/page-objects/pastebin-home-page");

describe("Pastebin.com", () => {
  const PASTE_TEXT = "Hello from Webdriver";
  const PASTE_NAME = "helloweb";

  it("should login with valid credentials", async () => {
    await pastebinHomePage.open();
    await pastebinHomePage.typeAndSavePaste(PASTE_TEXT, PASTE_NAME);
  });
});
