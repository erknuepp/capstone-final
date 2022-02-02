const { Builder, Capabilities } = require("selenium-webdriver")
const YooxPage = require("./yooxPage")
const YooxNewArrivalsPage = require("./yooxNewArrivalsPage")
const YooxClothingNewArrivalsPage = require("./yooxClothingNewArrivalsPage")
const YooxCartPage = require("./yooxCartPage")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
var homePage = new YooxPage(driver, 'https://www.yoox.com/')

// navigate to yoox //

test('Yoox checkout', async() => {
    await homePage.navigate()

    // select "new arrivals" //
    await homePage.clickNewArrivals();

    // select 1st option of drop down: "clothing" //
    const newArrivalsPage = new YooxNewArrivalsPage(driver, null);
    await newArrivalsPage.clickClothing();

    // select 1st clothing item in array //
    const clothingNewArrivalsPage = new YooxClothingNewArrivalsPage(driver, null);
    await clothingNewArrivalsPage.clickFirstClothingItem();

    // select clothing's size S on item page //
    await clothingNewArrivalsPage.clickSmallSize();
    // select "add to shopping bag" //
    await clothingNewArrivalsPage.clickAddToCart();
    // select shopping bag (top right corner) //
    await clothingNewArrivalsPage.clickGoToCart();
    // select "goto shopping bag" //
    const cartPage = new YooxCartPage(driver, null);
    cartPage.clickShoppingBag();
    // select "proceed with order" //
    selectText = By.xpath('//*[@id="trkNextBottom"]/span')

    await myPage.driver.quit()
})