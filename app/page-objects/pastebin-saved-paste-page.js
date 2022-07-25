const Page = require("./page");

class PastebinSavedPastePage extends Page {
  get getActualPageTitle() {
    const actualPageTitle = browser.getTitle();
    return actualPageTitle;
  }

  get actualSyntaxHighlighting() {
    return $('//div[@class="left"]//a');
  }

  get actualPastedText() {
    return $("//textarea");
  }
}

module.exports = new PastebinSavedPastePage();
