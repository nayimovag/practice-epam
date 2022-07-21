const pastebinHomePage = require('../../app/page-objects/pastebin-home-page')

describe('Pastebin.com', () => {
    
  const PASTE_TEXT = 'git config --global user.name "New Sheriff in Town" \ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \ngit push origin master --force'
  const PASTE_NAME = 'how to gain dominance among developers'

  it('should login with valid credentials', async () => {
    await pastebinHomePage.open()
    await pastebinHomePage.typeAndSavePaste(PASTE_TEXT, PASTE_NAME)
  })

})