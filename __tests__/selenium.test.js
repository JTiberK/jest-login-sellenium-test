const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const os = require('os');
const path = require('path');
const fs = require('fs');

describe('Prueba básica con Selenium', () => {
  let driver;

  beforeAll(async () => {
    // Crea un directorio temporal único para cada sesión
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'selenium-'));
    const options = new chrome.Options()
      .headless()
      .addArguments(`--user-data-dir=${tempDir}`);

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  test('Debería abrir Google y buscar "Selenium"', async () => {
    await driver.get('https://www.google.com');
    try {
      const acceptBtn = await driver.wait(
        until.elementLocated(By.css('[id="L2AGLb"], [aria-label*="Aceptar todo"]')),
        3000
      );
      await acceptBtn.click();
    } catch (e) { }
    const searchBox = await driver.wait(until.elementLocated(By.name('q')), 3000);
    await searchBox.sendKeys('Selenium\n');
    await driver.wait(until.titleContains('Selenium'), 10000);
    const title = await driver.getTitle();
    expect(title).toMatch(/Selenium/);
  });
});