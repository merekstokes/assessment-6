
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
});

test('Choices div shows up when clicking Draw button', async () => {
    const drawButton = await driver.findElement(By.id('draw'));
    const choicesDiv = await driver.findElement(By.id('choices'));
    const displayed = await choicesDiv.isDisplayed();
    drawButton.click();
    expect(displayed).toBe(true);
})

test('player-duo div shows up when clicking Add to Duo button', async () => {
    const addToDuoButton = await driver.findElement(By.className('bot-btn'));
    const playerDuoDiv = await driver.findElement(By.id('player-duo'));
    const displayed = await playerDuoDiv.isDisplayed();
    addToDuoButton.click();
    expect(displayed).toBe(true);
})