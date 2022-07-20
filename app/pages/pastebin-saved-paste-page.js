const Page = require('./page')
const { By } = require('selenium-webdriver');

class PastebinSavedPastePage extends Page {

  constructor() {
    super()

    this.actualSyntaxHighlighting = By.xpath('/html/body/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/a')
    this.actualPastedText = By.xpath('//textarea')
    
  }

  async getActualPageTitle() {
    let actualPageTitle = await driver.getTitle()
    return actualPageTitle
    
  }

  async getActualSyntaxHighlighting() {
    await this.actualSyntaxHighlighting.getText().then(function (text) {
        return text
     })
  }

  async getActualPastedText() {
    await this.actualPastedText.getText().then(function (text) {
        return text
     })
  }
}

module.exports = PastebinSavedPastePage