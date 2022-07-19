const PastebinHomePage = require('../app/pages/pastebin-home-page')
const { getDriver } = require('../app/helper/get-driver')

describe('Selenium WebDriver', () => {
  const PASTE_TEXT = 'Hello from WebDriver'
  const PASTE_NAME = 'helloweb'

  const DRIVER = getDriver()

  const pastebinHomePage = new PastebinHomePage(DRIVER)

  it('should paste some text and save it', async () => {
    await pastebinHomePage.open()
    await pastebinHomePage.typeAndSavePaste(PASTE_TEXT, PASTE_NAME)
    await pastebinHomePage.closeBrowser()
  })
})
