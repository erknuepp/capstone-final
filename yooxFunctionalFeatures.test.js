const { Builder, Capabilities } = require("selenium-webdriver")
const YooxPage = require("./yooxPage")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const yooxPage = new YooxPage(driver, 'https://www.yoox.com/us/women')

// Clean up driver after test
afterEach(async() => {
    await homePage.driver.quit();
});

test('Yoox features', async() => {
    await yooxPage.navigate()

    await yooxPage.clickDesigners();

    await yooxPage.clickBurberryDesigner();
}, 30000)


/* constructor(driver, url) {
        super(driver, url)
        // when we use super we are calling the original element & methods from the base page //
 }

 // methods //

 async doSearch(term) {
     await this.setInput(this.searchBar, '${term}\n')
 }

 async getResults() {
     return await this.getText(this.results)
 }
}
/* // clicks given element after waiting (elementBy) //
async click (elementBy) {
    return (await this.getElement(elementBy)).click()
} */