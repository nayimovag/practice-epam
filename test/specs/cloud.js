const cloudHomePage = require("../../app/page-objects/cloud-home-page");
const getEmailPage = require("../../app/page-objects/get-email-page");

describe("cloud.google.com and 10minutemail.com ", () => {
  it("should login with valid credentials", async () => {
    await cloudHomePage.open();
    await cloudHomePage.typeAndSave();
  });

  it("should copy paste an email", async () => {
    await getEmailPage.open();
    await getEmailPage.copyEmail();
    await cloudHomePage.pasteAndSendEmail();
    await getEmailPage.readEmail();
    expect(await getEmailPage.emailedEstimatedBill).toHaveTextContaining(
      "Estimated Monthly Cost:"
    );
  });
});
