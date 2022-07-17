const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build()
  driver.manage().window().maximize()
  try {
    await driver.get('https://cloud.google.com/')
    let searchbox = await driver.findElement(By.name('q'))
    await searchbox.sendKeys("Google Cloud Platform Pricing Calculator\n")
    await driver.wait(until.elementLocated(By.xpath('//a[contains(.,"Google Cloud Pricing Calculator")]'))).click()
    await driver.switchTo().frame(
        driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//iframe[contains(@src,'https://cloud.google.com/products/calculator/index_d6a98ba38837346d20babc06ff2153b68c2990fa24322fe52c5f83ec3a78c6a0.frame')]"))))
      );
    await driver.switchTo().frame("myFrame");
    await driver.findElement(By.xpath("//input[@ng-model='listingCtrl.computeServer.quantity']")).sendKeys('4')
    await driver.findElement(By.xpath("//md-select[@placeholder='Series']")).click()
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//*[contains(text(), 'N1')]")))).click()//n1
    await driver.findElement(By.xpath("//md-select[@placeholder='Instance type']")).click()
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//*[contains(text(), 'n1-standard-8')]")))).click()
    await driver.findElement(By.xpath("//md-checkbox[@aria-label='Add GPUs']")).click()//add gpu
    await driver.findElement(By.xpath("//md-select[@placeholder='GPU type']")).click()//gpu type
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//*[contains(text(), 'NVIDIA Tesla V100')]")))).click()//tesla v100
    await driver.findElement(By.xpath("//md-select[@placeholder='Number of GPUs']")).click()//gpu amount
    await driver.findElement(By.xpath("//md-option[@ng-repeat='item in listingCtrl.supportedGpuNumbers[listingCtrl.computeServer.gpuType]' and @value='1']")).click()//1 gpu
    await driver.findElement(By.xpath("//md-select[@placeholder='Local SSD']")).click()//ssd
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//*[contains(text(), '2x375 GB')]")))).click()//2x375
    await driver.findElement(By.xpath("//md-select[@placeholder='Datacenter location']")).click()//iowa
    await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//md-option[@ng-repeat='item in listingCtrl.fullRegionList | filter:listingCtrl.inputRegionText.computeServer' and @value='europe-west3']")))).click()//frankfurt
    await driver.findElement(By.xpath("//md-select[@placeholder='Committed usage']")).click()//usage
    await driver.findElement(By.xpath("(//div[contains(text(), '1 Year')])[2]")).click()//1 year
    await driver.findElement(By.xpath("//button[@aria-label='Add to Estimate']")).click()//add estimate

  }

  finally {
    // await driver.quit();
  }
})();