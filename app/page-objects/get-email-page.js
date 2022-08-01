const { Key } = require("selenium-webdriver");
const Page = require("./page");

class GetEmailPage extends Page {
  get copyEmailButton() {
    return $('//*[@id="click-to-copy"]');
  }

  get readEmailButton() {
    return $('//div[@class="col-box"]');
  }

  get emailedEstimatedBill() {
    return $("//td/h2");
  }

  async copyEmail() {
    await this.copyEmailButton.waitForDisplayed();
    await this.copyEmailButton.click();
    await browser.switchWindow("cloud.google.com");
  }

  async readEmail() {
    await browser.pause(30000);
    await this.readEmailButton.waitForDisplayed();
    await this.readEmailButton.click();
  }

  async open() {
    await browser.newWindow("https://temp-mail.org/en/");
  }
}

module.exports = new GetEmailPage();
