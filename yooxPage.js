const { By } = require("selenium-webdriver")
const BasePage = require("./basePage")

// navigate to yoox //

module.exports = class YooxPage extends BasePage {
    // selectors //
    searchIconBy = By.xpath('//*[@id="fayt-controls"]/svg/use')
    searchInputBy = By.id('js-text-search-input')
    womenSpanBy = By.xpath('//*[@id="women"]/a/span')
    itemImageBy = By.xpath('//*[@id="item_12590531BF"]/div[1]/a/img')
    newArrivalsBy = By.xpath('//*[@id="sections-menu"]/li[1]/span')
    newArrivalsWomenBy = By.xpath('//*[@id="js-newarrivalswomen"]/div[1]/div/div[1]/div/div[1]/a')
    clothingItemImageBy = By.xpath('//*[@id="item_47296276LR"]/div[1]/a/img')
    sizeSmallBy = By.xpath('//*[@id="scrollContent"]/div[3]/div/div[2]/div/div/div/div[2]/div/div/span[1]')
    addToCartButtonBy = By.xpath('//*[@id="addToCart"]/button')
    shopingBagButtonBy = By.xpath('//*[@id="cart-badge"]/a')
    goToCheckoutButtonBy = By.xpath('//*[@id="goToCheckOut"]')
    proceedWithOrderButtonBy = By.xpath('//*[@id="trkNextBottom"]/span')
    headerBy = By.xpath('//*[@id="logo-splash"]/div/h1/span')

    constructor(driver, url) {
        super(driver, url)
            // when we use super we are calling the original element & methods from the base page //
    }

    // methods //
    async getYooxHomeHeaderText() {
        return await this.getText(this.headerBy)
    }

    async clickWomen() {
        await this.click(this.womenSpanBy)
    }

    async clickSearchIcon() {
        await this.click(this.searchIconBy)
    }

    async searchOn(term) {
        await this.setInput(this.searchInputBy, term + '\n');
    }
}