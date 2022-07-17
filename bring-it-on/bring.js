const {Builder, By} = require('selenium-webdriver');

(async function App() {
  let driver = await new Builder().forBrowser('chrome').build();
  driver.manage().window().maximize();
  try {
    await driver.get('https://pastebin.com');

    let text = 'git config --global user.name "New Sheriff in Town" \ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \ngit push origin master --force'
    await driver.findElement(By.xpath('//*[@id="postform-text"]')).sendKeys(text)
    await driver.findElement(By.xpath('//*[@id="select2-postform-format-container"]')).click()
    await driver.findElement(By.xpath('//li[contains(text(), "Bash")]')).click();
    await driver.findElement(By.css('#select2-postform-expiration-container')).click()
    await driver.findElement(By.xpath('//li[contains(.,"10 Minutes")]')).click();
    await driver.findElement(By.xpath('//*[@id="postform-name"]')).sendKeys("how to gain dominance among developers");
    await driver.findElement(By.xpath('//*[@id="w0"]/div[5]/div[1]/div[8]/button')).click();
  }
    finally {
      // await driver.quit();
    }
  })();