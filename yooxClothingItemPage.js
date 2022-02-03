const { By } = require("selenium-webdriver")
const BasePage = require("./basePage")

module.exports = class YooxClothingItemPage extends BasePage {

    // selectors //

    sizesBy = By.xpath('//*[@id="teleyooxMysizes"]/div[1]/div[3]');
    sizeSmallBy = By.xpath('//*[@id="scrollContent"]/div[3]/div/div[2]/div/div/div/div[2]/div/div/span[1]')
    addToShoppingBagButtonBy = By.xpath('//*[@id="addToCart"]/button')
    cartBy = By.xpath('//*[@id="cart-badge"]/a')

    constructor(driver, url) {
        super(driver, url)
            // when we use super we are calling the original element & methods from the base page //
    }

    // methods //

    async clickSizes() {
        return await this.click(this.sizesBy);
    }

    async clickSmallSize() {
        return await this.click(this.sizeSmallBy);
    }

    async clickAddToShoppingBag() {
        return await this.click(this.addToShoppingBagButtonBy);
    }

    async clickGoToCart() {
        return await this.click(this.cartBy);
    }
}