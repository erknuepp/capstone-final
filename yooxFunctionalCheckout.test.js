const { Builder, Capabilities } = require("selenium-webdriver")
const YooxPage = require("./yooxPage")
const YooxNewArrivalsPage = require("./yooxNewArrivalsPage")
const YooxClothingItemPage = require("./yooxClothingItemPage")
const YooxShoppingBagPartial = require("./yooxShoppingBagPartial")
const YooxShoppingBagPage = require("./yooxShoppingBagPage")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
var homePage = new YooxPage(driver, 'https://www.yoox.com/us/women')

// Clean up driver after test
afterEach(async() => {
    await homePage.driver.quit();
});


test('Yoox checkout', async() => {

    await homePage.navigate();
    await homePage.dismissChangeCountryPopUp();
    await homePage.clickNewArrivals();
    await homePage.clickClothing();

    const newArrivalsPage = new YooxNewArrivalsPage(driver, null);
    await newArrivalsPage.clickFirstClothingItem();

    let clothingItemPage = new YooxClothingItemPage(driver, null);
    await clothingItemPage.clickSmallSize();
    clothingItemPage = new YooxClothingItemPage(driver, null);
    await clothingItemPage.clickAddToShoppingBag();
    await new Promise(r => setTimeout(r, 3000));
    await clothingItemPage.clickShoppingBagIcon();
    await new Promise(r => setTimeout(r, 2000));
    const shoppingBagPartial = new YooxShoppingBagPartial(driver, null);
    await shoppingBagPartial.clickGoToShoppingBag();

    const shoppingBagPage = new YooxShoppingBagPage(driver, null);
    await shoppingBagPage.clickProceedWithYourOrder();
}, 30000)