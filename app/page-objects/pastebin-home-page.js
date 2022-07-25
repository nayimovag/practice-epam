const Page = require("./page");

class PastebinHomePage extends Page {
  get newPasteTextArea() {
    return $("#postform-text");
  }

  get syntaxHighlightDropdown() {
    return $("#select2-postform-format-container");
  }

  get bashOption() {
    return $('//li[contains(text(), "Bash")]');
  }

  get expirationDropdown() {
    return $("#select2-postform-expiration-container");
  }

  get tenMinutesOption() {
    return $('//li[contains(.,"10 Minutes")]');
  }

  get pasteNameField() {
    return $("#postform-name");
  }

  get savePasteButton() {
    return $('//*[@id="w0"]//button');
  }

  async typeAndSavePaste(pasteText, pasteName) {
    await this.newPasteTextArea.setValue(pasteText);
    await this.syntaxHighlightDropdown.click();
    await this.bashOption.click();
    await this.expirationDropdown.click();
    await this.tenMinutesOption.click();
    await this.pasteNameField.setValue(pasteName);
    await this.savePasteButton.click();
  }

  async open() {
    await super.open("https://pastebin.com");
  }
}

module.exports = new PastebinHomePage();
