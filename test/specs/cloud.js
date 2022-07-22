const cloudHomePage = require('../../app/page-objects/cloud-home-page')
const estimateCostPage = require('../../app/page-objects/estimate-cost-page')

describe('cloud.google.com ', () => {

  it('should login with valid credentials', async () => {
    await cloudHomePage.open()
    await cloudHomePage.typeAndSave()
  })

  it('should check if the vm class corresponds entered data', async () => {
    expect(await estimateCostPage.estimateVMClass).toHaveTextContaining('Provisioning model: Regular')
  })

  it('should check if the instance type corresponds entered data', async () => {
    expect(await estimateCostPage.estimateInstanceType).toHaveTextContaining('Instance type: n1-standard-8')
  })

  it('should check if the region corresponds entered data', async () => {
    expect(await estimateCostPage.estimateRegion).toHaveTextContaining('Region: Frankfurt')
  })

  it('should check if the local ssd corresponds entered data', async () => {
    expect(await estimateCostPage.estimateLocalSSD).toHaveTextContaining('Local SSD: 2x375 GiB')
  })

  it('should check if the commitment term corresponds entered data', async () => {
    expect(await estimateCostPage.estimateCommitmentTerm).toHaveTextContaining('Commitment term: 1 Year')
  })

  it('should check the bill', async () => {
    expect(await estimateCostPage.totalEstimateCost).toHaveTextContaining('1,081.20')
  })
}) 