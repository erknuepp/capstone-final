const { Builder, Capabilities } = require("selenium-webdriver");
const YooxPage = require("./yooxPage");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const myPage = new YooxPage(driver, 'https://www.yoox.com/us/women');

// Clean up driver after test
afterEach(() => {
    homePage.driver.quit();
});

test('Yoox home page loads', async() => {

    await myPage.navigate();

    const actualHeaderText = await myPage.getYooxHomeHeaderText();

    // Assert header text
    expect(actualHeaderText).toBe('YOOX');

    await myPage.driver.quit();
})