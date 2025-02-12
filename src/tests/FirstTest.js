const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to a webpage
        await driver.get('https://www.google.com');

        // Find an element (example: a button) and interact with it
        let button = await driver.findElement(By.linkText('Gmail'));
        await button.click();

        // Wait for some condition
        await driver.wait(until.titleContains('Gmail'), 10000);

        console.log('Successfully navigated to Gmail page!');

    } finally {
        await driver.quit();
    }
})();