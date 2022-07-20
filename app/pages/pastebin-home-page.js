const Page = require('./page')
const { By } = require('selenium-webdriver');

class PastebinHomePage extends Page {

  constructor(driver) {
    super(driver)

    this.newPasteTextArea = By.xpath('//*[@id="postform-text"]')
    this.syntaxHighlightDropdown = By.xpath('//*[@id="select2-postform-format-container"]')
    this.bashOption = By.xpath('//li[contains(text(), "Bash")]')
    this.expirationDropdown = By.css('#select2-postform-expiration-container')
    this.tenMinutesOption = By.xpath('//li[contains(.,"10 Minutes")]')
    this.pasteNameField = By.xpath('//*[@id="postform-name"]')
    this.savePasteButton = By.xpath('//*[@id="w0"]//button')
  }

  async open() {
    await super.open('https://pastebin.com')
  }

  async typeAndSavePaste(pasteText, pasteName) {
    await this.driver.findElement(this.newPasteTextArea).sendKeys(pasteText)
    await this.driver.findElement(this.syntaxHighlightDropdown).click()
    await this.driver.findElement(this.bashOption).click()
    await this.driver.findElement(this.expirationDropdown).click()
    await this.driver.findElement(this.tenMinutesOption).click()
    await this.driver.findElement(this.pasteNameField).sendKeys(pasteName)
    await this.driver.findElement(this.savePasteButton).click()
  }
}

module.exports = PastebinHomePage