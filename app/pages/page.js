require('chromedriver')

class Page {

  constructor(driver) {
    this.driver = driver
  }

  async open(url) {
    await this.driver.get(url)
  }

  async closeBrowser() {
    await this.driver.close()
  }
}

module.exports = Page
