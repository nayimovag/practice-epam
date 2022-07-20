const Page = require('./page')
const { By } = require('selenium-webdriver');

class PastebinSavedPastePage extends Page {

  constructor(driver) {
    super(driver)

    this.actualSyntaxHighlighting = By.xpath('//div[@class="left"]//a')
    this.actualPastedText = By.xpath('//textarea')
    
  }

  async getActualPageTitle() {
    let actualPageTitle = await driver.getTitle()
    return actualPageTitle
  }

  async getActualSyntaxHighlighting() {
    const actualSyntaxHighlightingElement = await this.driver.findElement(this.actualSyntaxHighlighting)
    return actualSyntaxHighlightingElement.getText()
  }

  async getActualPastedText() {
    const actualPastedTextElement = await this.driver.findElement(this.actualPastedText)
    return actualPastedTextElement.getText()
  }
}

module.exports = PastebinSavedPastePage