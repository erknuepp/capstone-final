const { Builder, Capabilities } = require("selenium-webdriver")
const YooxPage = require("./yooxPage")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
var myPage = new YooxPage(driver, 'https://www.yoox.com/us/women')

// Clean up driver after test
afterEach(() => {
    homePage.driver.quit();
});

test('Yoox menu', async() => {
    await myPage.navigate()

    // select "new arrivals" //

    // select 1st option of drop down: "clothing" //

    // select 1st clothing item in array //


    await myPage.driver.quit()
})