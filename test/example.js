const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  for(let i = 1; i <= 10; i++) {
    await page.click(".increment-add")
    const text = await page.$eval(".count", item => {
      return item.textContent;
    })
  
    console.log(text === `count: ${i}`);
  }

  await browser.close();
})();