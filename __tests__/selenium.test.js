/*

 //* @jest-environment node
 
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const os = require('os');
const path = require('path');
const fs = require('fs');

describe('Prueba básica con Selenium y DuckDuckGo', () => {
  let driver;

  beforeAll(async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'selenium-'));
    const options = new chrome.Options()
      .addArguments('--headless')
      .addArguments(`--user-data-dir=${tempDir}`);
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  });

  afterAll(async () => {
    if (driver) await driver.quit();
  });

  test('Debería abrir DuckDuckGo y buscar "Selenium"', async () => {
    await driver.get('https://duckduckgo.com');
    const searchBox = await driver.wait(until.elementLocated(By.id('search_form_input_homepage')), 5000);
    await driver.wait(until.elementIsVisible(searchBox), 5000);
    await driver.wait(until.elementIsEnabled(searchBox), 5000);
    await searchBox.clear();
    await searchBox.sendKeys('Selenium\n');
    await driver.wait(until.titleContains('Selenium'), 10000);
    const title = await driver.getTitle();
    expect(title).toMatch(/Selenium/);
  });
});
*/