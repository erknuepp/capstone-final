const { Builder, Capabilities } = require("selenium-webdriver");
const YooxPage = require("./yooxPage");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const myPage = new YooxPage(driver, 'https://www.yoox.com/us/women');

// navigate to yoox //

test('Yoox home page loads', async() => {

    await myPage.navigate();

    const actualHeaderText = await myPage.getYooxHomeHeaderText();

    // Assert header text
    expect(actualHeaderText).toBe('YOOX');

    await myPage.driver.quit();
})