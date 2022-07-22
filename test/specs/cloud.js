const cloudHomePage = require('../../app/page-objects/cloud-home-page')

describe('cloud.google.com ', () => {

  const SEARCH_TEXT = "Google Cloud Platform Pricing Calculator\n"
  const NUMBEROF_INSTANCES = '4'

  it('should login with valid credentials', async () => {
    await cloudHomePage.open()
    await cloudHomePage.typeAndSave(SEARCH_TEXT, NUMBEROF_INSTANCES)
  })

}) 