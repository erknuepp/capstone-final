const { Builder, Capabilities } = require("selenium-webdriver")
const YooxPage = require("./yooxPage")
const YooxNewArrivalsPage = require("./yooxNewArrivalsPage")
const YooxClothingNewArrivalsPage = require("./yooxClothingNewArrivalsPage")
const YooxShoppingBagPartial = require("./yooxShoppingBagPartial")
const YooxShoppingBagPage = require("./yooxShoppingBagPage")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
var homePage = new YooxPage(driver, 'https://www.yoox.com/us/women')

// navigate to yoox //
afterEach(() => {
    //homePage.driver.quit();
});


test('Yoox checkout', async() => {

    await homePage.navigate();

    await homePage.dismissPopUp();

    // select "new arrivals" //
    await homePage.clickNewArrivals();

    // select 1st option of drop down: "clothing" //
    const newArrivalsPage = new YooxNewArrivalsPage(driver, null);
    await newArrivalsPage.clickClothing();

    // select 1st clothing item in array //
    const clothingNewArrivalsPage = new YooxClothingNewArrivalsPage(driver, null);
    await clothingNewArrivalsPage.clickFirstClothingItem();
    await clothingNewArrivalsPage.clickSmallSize();
    await clothingNewArrivalsPage.clickAddToCart();
    await clothingNewArrivalsPage.clickGoToCart();

    const shoppingBagPartial = new YooxShoppingBagPartial(driver, null);
    await shoppingBagPartial.clickShoppingBag();

    const shoppingBagPage = new YooxShoppingBagPage(driver, null);
    await shoppingBagPage.clickProceedWithYourOrder();
})