const Page = require('./page');

class CloudHomePage extends Page {

    get searchButton() {
        return $('//*[@name="q"]')
      }

      get searchResult() {
        return $('//a[contains(.,"Google Cloud Pricing Calculator")]')
      }

      get homePageFirstFrame() {
        return $("//iframe[contains(@src,'https://cloud.google.com/products/calculator/index_d6a98ba38837346d20babc06ff2153b68c2990fa24322fe52c5f83ec3a78c6a0.frame')]")
      }

      get homePageSecondFrame() {
        return $('#myFrame')
      }

      get numberOfInstancesArea() {
          return $("//input[@ng-model='listingCtrl.computeServer.quantity']")
      }

      
      async switchToFrames(frame1, frame2) {
        await this.browser.switchToFrame(frame1)
        await this.browser.switchToFrame(frame2)
      }
    
      async typeAndSave(searchText, numberOfInstances) {
        await this.searchButton.setValue(searchText)
        await this.searchResult.click()
        await this.switchToFrames(this.homePageFirstFrame, this.homePageSecondFrame)
        await this.numberOfInstancesArea.setValue(numberOfInstances)

      }

      async open() {
        await super.open('https://cloud.google.com')
      }
  }

module.exports = new CloudHomePage() 