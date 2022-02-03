const { Builder, Capabilities, By } = require("selenium-webdriver");
const YooxPage = require("./yooxPage");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
var homePage = new YooxPage(driver, 'https://www.yoox.com/us/women');

// Clean up driver after test
afterEach(async() => {
    await homePage.driver.quit();
});

test('Yoox search womens items', async() => {
    await homePage.navigate();

    // select "women" (top right toolbar) 
    await homePage.clickWomen();
    // select search bar 
    await homePage.clickSearchIcon();
    // search for "plein" 
    await homePage.searchOn("plein");
    // assert results 

    const numberOfResults = await homePage.GetNumberOfSearchResults();
    jest.expect(numberOfResults).toBeGreaterThan(0);

    await homePage.driver.quit();
}, 30000)