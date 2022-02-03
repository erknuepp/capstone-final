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
        // select "designer" from (top left toolbar) //
    selectText = By.Xpath('//*[@id="sections-menu"]/li[2]/span')
        // select "Burberry" from drop down //
    selectText = By.Xpath('//*[@id="js-designerswomen"]/div[1]/div/div[1]/div[2]/div[5]/a')
        // select "accessories", under "categories" //
    selectText = By.Xpath('//*[@id="teleyooxCategories"]/div[2]/div/ul/li[1]/a')
        // select "sizes" //
    select.By.Xpath('//*[@id="teleyooxMysizes"]/div[1]/div[3]')
        // select size "S" //
    selectText = By.Xpath('//*[@id="listOfSizes"]/ul/li[3]/a')
        // select a "color" //
    selectText = By.Xpath('//*[@id="section-clr"]/div[1]/div[3]')
        // select color "azure" //
    selectText = By.Xpath('//*[@id="section-clr"]/div[2]/div/ul/li[1]/a/span[2]')
        // select "material" //
    selectText = By.Xpath('//*[@id="section-mtrl"]/div[1]/div[3]')
        // select material "cotton"  //
    selectText = By.Xpath('//*[@id="section-mtrl"]/div[2]/div/ul/li/a/span[2]')

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