const { Key } = require("selenium-webdriver");
const Page = require("./page");

class GetEmailPage extends Page {

  get copyEmailButton() {
    return $('//*[@id="copy_address"]');
  }

  get readEmailButton() {
    return $('//div[@class="small_sender"]');
  }
  
  get emailedEstimatedBill() {
    return $("//h2");
  }

  async copyEmail() {
    await this.copyEmailButton.click();
    await browser.switchWindow("cloud.google.com");
  }

  async readEmail() {
    await browser.pause(30000);
    await this.readEmailButton.waitForDisplayed();
    await this.readEmailButton.click();
  }

  async open() {
    await browser.newWindow("https://10minutemail.com/");
  }
}

module.exports = new GetEmailPage();
