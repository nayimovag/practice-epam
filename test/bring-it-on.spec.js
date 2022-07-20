const PastebinHomePage = require('../app/pages/pastebin-home-page')
const PastebinSavedPastePage = require('../app/pages/pastebin-saved-paste-page')
const { getDriver } = require('../app/helper/get-driver')
const { expect } = require('chai');

describe('Selenium WebDriver', () => {
  const PASTE_TEXT = 'git config --global user.name "New Sheriff in Town" \ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \ngit push origin master --force'
  const PASTE_NAME = 'how to gain dominance among developers'

  const DRIVER = getDriver()

  const pastebinHomePage = new PastebinHomePage(DRIVER)

  it('should paste some text and save it', async () => {
    await pastebinHomePage.open()
    await pastebinHomePage.typeAndSavePaste(PASTE_TEXT, PASTE_NAME)
  })

  describe('Checking if the entered data was saved correctly', () => {

    const pastebinSavedPastePage = new PastebinSavedPastePage(DRIVER)

    it('should check page title', async () => {
      expect(pastebinSavedPastePage.getActualPageTitle()).to.be.equal('how to gain dominance among developers')
    })
  
    it('should check syntax highlighting', async () => {
      expect(pastebinSavedPastePage.getActualSyntaxHighlighting()).to.be.equal('Bash')
    })
  
    it('should check pasted text', async () => {
      expect(pastebinSavedPastePage.getActualPastedText()).to.be.equal('git config --global user.name "New Sheriff in Town" \ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \ngit push origin master --force')
    })

    after(async () => {
      await pastebinSavedPastePage.closeBrowser()
    })

  })
})
