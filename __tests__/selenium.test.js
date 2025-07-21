const { Builder, By, until } = require('selenium-webdriver');

describe('Prueba básica con Selenium', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('Debería abrir Google y buscar "Selenium"', async () => {
    await driver.get('https://www.google.com');
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Selenium\n');
    await driver.wait(until.titleContains('Selenium'), 10000);
    const title = await driver.getTitle();
    expect(title).toMatch(/Selenium/);
  });
});