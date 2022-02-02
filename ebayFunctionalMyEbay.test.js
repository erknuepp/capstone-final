const { Builder, Capabilities } = require("selenium-webdriver")
const EbayPage = require("./ebayPage")
const MyEbayPage = require("./myEbayPage")
const EbayUserNamePage = require("./ebayUserNamePage")
const EbayPasswordPage = require("./ebayPasswordPage")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
var myPage = new EbayPage(driver, 'https://www.ebay.com/')


// navigate to ebay //

test('My eBay', async() => {
    await myPage.navigate()
    await myPage.clickMyEbay()
    var ebayUserNamePage = new EbayUserNamePage(driver, null)
    await ebayUserNamePage.userNameInput("decadentmobile@gmail.com")
    await ebayUserNamePage.clickContinue()
    var ebayPasswordPage = new EbayPasswordPage(driver, null)
    await ebayPasswordPage.InputPassword("nasseka15@")
    await ebayPasswordPage.clickSignIn()
    var myEbayPage = new MyEbayPage(driver)
    await myEbayPage.clickFindDeals()
    expect(driver.getCurrentUrl()).toBe('https://www.ebay.com/help/buying/search-tips/search-tips?id=4006')
    await myPage.driver.quit()
})