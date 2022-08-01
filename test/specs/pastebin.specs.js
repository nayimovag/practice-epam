const pastebinHomePage = require("../../app/page-objects/pastebin-home-page");
const pastebinSavedPastePage = require("../../app/page-objects/pastebin-saved-paste-page");
const paste = require("../../model/paste");

describe("Pastebin.com", () => {
  it("should login with valid credentials", async () => {
    await pastebinHomePage.open();
    await pastebinHomePage.typeAndSavePaste(paste.code, paste.title);
  });

  it("should check syntax highlighting", async () => {
    await expect(
      await pastebinSavedPastePage.actualSyntaxHighlighting
    ).toHaveTextContaining(paste.syntax);
  });

  it("should check pasted text", async () => {
    await expect(await pastebinSavedPastePage.actualPastedText).toHaveText(
      paste.code
    );
  });

  it("should check page title", async () => {
    await expect(await pastebinSavedPastePage.getActualPageTitle).toEqual(
      paste.title + " - Pastebin.com"
    );
  });
});
