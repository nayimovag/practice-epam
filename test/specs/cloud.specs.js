const cloudHomePage = require("../../app/page-objects/cloud-home-page");
const getEmailPage = require("../../app/page-objects/get-email-page");
const machine = require("../../model/machine");
const estimateCostPage = require("../../app/page-objects/estimate-cost-page");

describe("cloud.google.com and 10minutemail.com ", () => {
  it("should login with valid credentials", async () => {
    await cloudHomePage.open();
    await cloudHomePage.typeAndSave();
  });

  it("should check if the vm class corresponds entered data", async () => {
    expect(await estimateCostPage.estimateVMClass).toHaveTextContaining(
      machine.vmClass
    );
  });

  it("should check if the instance type corresponds entered data", async () => {
    expect(await estimateCostPage.estimateInstanceType).toHaveTextContaining(
      machine.instanceType
    );
  });

  it("should check if the region corresponds entered data", async () => {
    expect(await estimateCostPage.estimateRegion).toHaveTextContaining(
      machine.region
    );
  });

  it("should check if the local ssd corresponds entered data", async () => {
    expect(await estimateCostPage.estimateLocalSsd).toHaveTextContaining(
      machine.localSSD
    );
  });

  it("should check if the commitment term corresponds entered data", async () => {
    expect(await estimateCostPage.estimateCommitmentTerm).toHaveTextContaining(
      machine.commitmentTerm
    );
  });

  it("should check the bill", async () => {
    expect(await estimateCostPage.totalEstimateCost).toHaveTextContaining(
      machine.totalCost
    );
  });

  it("should copy paste an email", async () => {
    await getEmailPage.open();
    await getEmailPage.copyEmail();
    await cloudHomePage.pasteAndSendEmail();
    await getEmailPage.readEmail();
    expect(await getEmailPage.emailedEstimatedBill).toHaveTextContaining(
      machine.totalCost
    );
  });
});
