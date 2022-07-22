const cloudHomePage = require('../../app/page-objects/cloud-home-page')
const getEmailPage = require('../../app/page-objects/get-email-page')

describe('cloud.google.com ', () => {


  it('should login with valid credentials', async () => {
    await cloudHomePage.open()
    await cloudHomePage.typeAndSave()
  })

  it('should copy paste an email', async () => {
    await getEmailPage.open()
    await getEmailPage.copyAndPaste()
    expect(await getEmailPage.emailedEstimatedBill).toHaveTextContaining('4,024.56')
  })
  

}) 