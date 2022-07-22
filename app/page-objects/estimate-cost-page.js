const Page = require('./page');

class EstimateCostPage extends Page {

    get estimateVMClass() {
        return $('//*[@ng-if="item.items.editHook && item.items.editHook.initialInputs.class"]/div')
    }

    get estimateInstanceType() {
        return $('//*[@class="md-1-line md-no-proxy"]/div[@class="md-list-item-text ng-binding cpc-cart-multiline flex"]')
    }

    get estimateRegion() {
        return $('//*[@class="md-1-line md-no-proxy"]/div[@class="md-list-item-text ng-binding"]')
    }

    get estimateLocalSSD() {
        return $('//*[@class="md-1-line md-no-proxy ng-scope"]/div[@class="md-list-item-text ng-binding cpc-cart-multiline flex"]')
    }

    get estimateCommitmentTerm() {
        return $('//md-list-item[@ng-if="item.items.termText && item.items.termText.length != 0"]')
    }
}


module.exports = new EstimateCostPage() 