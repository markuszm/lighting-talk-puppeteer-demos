const puppeteer = require('puppeteer');

(async() => {

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://cosee.biz', {waitUntil: 'load'});

navigationResult = page.waitForNavigation(['load']);

await page.click('#navbar-collapse > ul > li:nth-child(3) > a');
await page.click('#navbar-collapse > ul > li.dropdown.open > ul > li:nth-child(1) > a');

await navigationResult;

await page.emulateMedia('screen');
await page.pdf({path: 'jobs.pdf'});

await browser.close()
})();
