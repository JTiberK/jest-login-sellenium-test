const { Builder } = require('selenium-webdriver');

describe('Selenium - Test mínimo Firefox', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
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