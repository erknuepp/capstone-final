const { Builder, Capabilities } = require("selenium-webdriver");
const EbayPage = require("./ebayPage");
jest.useRealTimers();


test('Filter eBay', async() => {
    const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    var myPage = new EbayPage(driver, 'https://www.ebay.com/');
    await myPage.navigate();
    // click into search bar, type in search request, click search button //
    await myPage.doSearch('puppies');
    // scroll down left column to "condition", click "new" //
    myPage = new EbayPage(driver, 'https://www.ebay.com/');
    await myPage.filterConditionNew();
    await myPage.driver.quit();
    myPage = new EbayPage(driver, 'https://www.ebay.com/')
        // continue scrolling down left column to "shipping options", click "free" //
    await myPage.filterFreeShipping();
    myPage = new EbayPage(driver, 'https://www.ebay.com/');
    // continue scrolling down left column to "return options", click "free" //
    await myPage.filterShowOnlyFreeReturns();
    // scroll further down left column to "see all", click //
    myPage = new EbayPage(driver, 'https://www.ebay.com/');
}, 60000);