const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://smash.gg');
  console.log(browser);
  //await browser.close();
})();