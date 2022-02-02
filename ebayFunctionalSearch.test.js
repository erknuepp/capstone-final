const { Builder, Capabilities } = require("selenium-webdriver")
const EbayPage = require("./ebayPage")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const myPage = new EbayPage(driver, 'https://www.ebay.com/')

/* navigate to ebay 
    in search bar, enter puppies, after successful, quit */

test('Searching eBay', async() => {
    await myPage.navigate()
    await myPage.doSearch('puppies')
    await driver.quit()
})