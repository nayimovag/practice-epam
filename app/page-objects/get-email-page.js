const Page = require('./page');

class GetEmailPage extends Page {

    get estimateVMClass() {
        return $('//*[@ng-if="item.items.editHook && item.items.editHook.initialInputs.class"]/div')
    }

    get email() {
        return $('//a[@data-clipboard-action="copy"]')
    }

    get emailBoxPaste() {
        return $('//input[@ng-model="emailQuote.user.email"]')
    }

    get sendEmailButton() {
        return $("//button[@aria-label='Send Email']")
    }
     
    get readEmail() {
        return $('//span[@class="predmet pull-left"]')
    }

    get emailedEstimatedBill() {
        return $('//h2')
    }

    async copyAndPaste() {
        await this.email.click()
        await browser.switchWindow('cloud.google.com')
        await browser.switchToFrame(0)
        await browser.switchToFrame(0)
        await this.emailBoxPaste.setValue(this.email)
        await this.sendEmailButton.click()
        await browser.switchWindow('minuteinbox.com')
        await this.readEmail.click()
    }

    async open() {
        await browser.newWindow('https://www.minuteinbox.com/')
      }
}


module.exports = new GetEmailPage() 