const Page = require("./page");

class CloudHomePage extends Page {
  get searchButton() {
    return $('//*[@name="q"]');
  }

  get searchResult() {
    return $('//a[contains(.,"Google Cloud Pricing Calculator")]');
  }

  get numberOfInstancesArea() {
    return $("//input[@ng-model='listingCtrl.computeServer.quantity']");
  }

  get seriesDropdown() {
    return $("//md-select[@placeholder='Series']");
  }

  get seriesOption() {
    return $("//*[contains(text(), 'N1')]");
  }

  get instanceTypeDropdown() {
    return $("//md-select[@placeholder='Instance type']");
  }

  get instanceTypeOption() {
    return $(
      "//div[@class='md-select-menu-container md-active md-clickable']//md-option[@value='CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8']"
    );
  }

  get addGpuCheckbox() {
    return $("//md-checkbox[@aria-label='Add GPUs']");
  }

  get gpuTypeDropdown() {
    return $("//md-select[@placeholder='GPU type']");
  }

  get gpuTypeOption() {
    return $("//*[contains(text(), 'NVIDIA Tesla V100')]");
  }

  get numberOfGpusDropdown() {
    return $("//md-select[@placeholder='Number of GPUs']");
  }

  get numberOfGpusOption() {
    return $(
      "//md-option[@ng-repeat='item in listingCtrl.supportedGpuNumbers[listingCtrl.computeServer.gpuType]' and @value='1']"
    );
  }

  get localSsdDropdown() {
    return $("//md-select[@placeholder='Local SSD']");
  }

  get localSsdOption() {
    return $("//*[contains(text(), '2x375 GB')]");
  }

  get dataCenterLocationDropdown() {
    return $("//md-select[@placeholder='Datacenter location']");
  }

  get dataCenterLocationOption() {
    return $(
      "//md-option[@ng-repeat='item in listingCtrl.fullRegionList | filter:listingCtrl.inputRegionText.computeServer' and @value='europe-west3']"
    );
  }

  get committedUsageDropdown() {
    return $("//md-select[@placeholder='Committed usage']");
  }

  get committedUsageOption() {
    return $("//*[@id='select_option_124']");
  }

  get addEstimateButton() {
    return $("//button[@aria-label='Add to Estimate']");
  }

  get emailEstimateButton() {
    return $('//*[@id="email_quote"]');
  }

  async typeAndSave() {
    await this.searchButton.setValue(
      "Google Cloud Platform Pricing Calculator\n"
    );
    await this.searchResult.click();
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
    await this.numberOfInstancesArea.setValue("4");
    await this.seriesDropdown.click();
    await this.seriesOption.click();
    await this.instanceTypeDropdown.click();
    await this.instanceTypeOption.click();
    await this.addGpuCheckbox.click();
    await this.gpuTypeDropdown.click();
    await this.gpuTypeOption.click();
    await this.numberOfGpusDropdown.click();
    await this.numberOfGpusOption.click();
    await this.localSsdDropdown.click();
    await this.localSsdOption.click();
    await this.dataCenterLocationDropdown.click();
    await this.dataCenterLocationOption.click();
    await this.committedUsageDropdown.click();
    await this.committedUsageOption.click();
    await this.addEstimateButton.click();
    await this.emailEstimateButton.click();
  }

  async open() {
    await super.open("https://cloud.google.com");
  }
}

module.exports = new CloudHomePage();
