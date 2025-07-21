const { Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

describe('Selenium - Test mínimo Firefox', () => {
  let driver;

  beforeAll(async () => {
    // Define la ruta al binario de Firefox Snap
    const options = new firefox.Options()
      .setBinary('/snap/bin/firefox')
      .headless(); // Modo headless recomendado en CI

    driver = await new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(options)
      .build();
  });

  afterAll(async () => {
    if (driver) await driver.quit();
  });

  test('Debería abrir DuckDuckGo', async () => {
    await driver.get('https://duckduckgo.com');
    const title = await driver.getTitle();
    expect(title).toMatch(/DuckDuckGo/);
  });
});