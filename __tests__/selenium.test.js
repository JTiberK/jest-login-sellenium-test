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

    // Esperar y cerrar el pop-up de cookies si aparece
    try {
      const acceptBtn = await driver.wait(
        until.elementLocated(By.css('[id="L2AGLb"], [aria-label*="Aceptar todo"]')),
        3000
      );
      await acceptBtn.click();
    } catch (e) {
      // Si no aparece el pop-up, continuar
    }

    const searchBox = await driver.wait(until.elementLocated(By.name('q')), 3000);
    await searchBox.sendKeys('Selenium\n');
    await driver.wait(until.titleContains('Selenium'), 10000);
    const title = await driver.getTitle();
    expect(title).toMatch(/Selenium/);
  });
});