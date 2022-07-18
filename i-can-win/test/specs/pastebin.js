describe('pastebin.com test', ()=>{

    it('should paste and save something', async()=>{
    await browser.url('https://pastebin.com/')
    expect(await browser.getTitle()).toEqual('Pastebin.com - #1 paste tool since 2002!')

    const textArea = $('#postform-text')
    const expiration = $('#select2-postform-expiration-container')
    const time = $('//li[contains(.,"10 Minutes")]')
    const title = $('#postform-name')
    const button = $('//*[@id="w0"]/div[5]/div[1]/div[8]/button')

    await(await textArea).setValue('Hello from WebDriver')
    await(await expiration).click()
    await(await time).click()
    await(await title).setValue('helloweb')
    await(await button).click()

    expect(await browser).toHaveTitle('helloweb - Pastebin.com')
    await browser.debug()
})

})