const { Browser } = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  driver.manage().window().maximize();
  try {
    await driver.get('https://pastebin.com');

    await driver.findElement(By.xpath('//*[@id="postform-text"]')).sendKeys('Hello from WebDriver');
    await driver.findElement(By.css('#select2-postform-expiration-container')).click()
    await driver.findElement(By.xpath('//li[contains(.,"10 Minutes")]')).click();
    await driver.findElement(By.xpath('//*[@id="postform-name"]')).sendKeys('helloweb');
    await driver.findElement(By.xpath('//*[@id="w0"]/div[5]/div[1]/div[8]/button')).click();
  }

  finally {
    // await driver.quit();
  }
})();