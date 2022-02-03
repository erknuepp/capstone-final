const { By } = require("selenium-webdriver")
const BasePage = require("./basePage")

// navigate to yoox //

module.exports = class YooxShoppingBagPatial extends BasePage {
    // selectors //

    // select "goto shopping bag" //
    goToShoppingBagBy = By.xpath('//*[@id="goToCheckOut"]')

    constructor(driver, url) {
        super(driver, url)
            // when we use super we are calling the original element & methods from the base page //
    }

    // methods //

    async clickShoppingBag() {
        return await this.click(this.goToShoppingBagBy);
    }
}