const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function SearchByLocation() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get('https://www.service.nsw.gov.au/service-centre');
    await driver.findElement(By.id('locatorTextSearch')).sendKeys('Sydney Domestic Airport 2020', Key.RETURN)
    await driver.sleep('10000');
  } finally {
    await driver.quit();
  }
})();