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

      get seriesDropdown() {
        return $("//md-select[@placeholder='Series']")
      }

      get seriesOption() {
        return $("//*[contains(text(), 'N1')]")
      }
    
      get instanceTypeDropdown() {
        return $("//md-select[@placeholder='Instance type']")
      }

      get instanceTypeOption() {
        return $("//*[contains(text(), 'n1-standard-8')]")
      }

      get addGPUCheckbox() {
        return $("//md-checkbox[@aria-label='Add GPUs']")
      }

      get GPUTypeDropdown() {
        return $("//md-select[@placeholder='GPU type']")
      }

       get GPUTypeOption() {
         return $("//*[contains(text(), 'NVIDIA Tesla V100')]")
       }

       get numberOfGPUsDropdown() {
         return $("//md-select[@placeholder='Number of GPUs']")
       }

       get numberOfGPUsoption() {
         return $("//md-option[@ng-repeat='item in listingCtrl.supportedGpuNumbers[listingCtrl.computeServer.gpuType]' and @value='1']")
       }

       get localSSDDropdown() {
         return $("//md-select[@placeholder='Local SSD']")
       }

       get localSSDOption() {
         return $("//*[contains(text(), '2x375 GB')]")
       }

       get dataCenterLocationDropdown() {
         return $("//md-select[@placeholder='Datacenter location']")
       }

       get dataCenterLocationOption() {
         return $("//md-option[@ng-repeat='item in listingCtrl.fullRegionList | filter:listingCtrl.inputRegionText.computeServer' and @value='europe-west3']")
       }

       get committedUsageDropdown() {
         return $("//md-select[@placeholder='Committed usage']")
       }

       get committedUsageOption() {
         return $("(//div[contains(text(), '1 Year')])[2]")
       }
      
       get addEstimateButton() {
         return $("//button[@aria-label='Add to Estimate']")
       }

       
      async typeAndSave(searchText, numberOfInstances) {
        await this.searchButton.setValue(searchText)
        await this.searchResult.click()
        await browser.switchToFrame(0)
        await browser.switchToFrame(0)
        await this.numberOfInstancesArea.setValue(numberOfInstances)
        await this.seriesDropdown.click()
        await this.seriesOption.click()
        await this.instanceTypeDropdown.click()
        await this.instanceTypeOption.click()
        await this.addGPUCheckbox.click()
        await this.GPUTypeDropdown.click()
        await this.GPUTypeOption.click()
        await this.numberOfGPUsDropdown.click()
        await this.numberOfGPUsoption.click()
        await this.localSSDDropdown.click()
        await this.localSSDOption.click()
        await this.dataCenterLocationDropdown.click()
        await this.dataCenterLocationOption.click()
        await this.committedUsageDropdown.click()
        await this.committedUsageOption.click()

      }

      async open() {
        await super.open('https://cloud.google.com')
      }
  }

module.exports = new CloudHomePage() 