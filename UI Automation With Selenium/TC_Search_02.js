const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function Search() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get('https://www.service.nsw.gov.au/ ');
    await driver.findElement(By.name('q')).sendKeys('Apply for a number plate', Key.RETURN)
    await driver.sleep('10000');
  } finally {
    await driver.quit();
  }
})();