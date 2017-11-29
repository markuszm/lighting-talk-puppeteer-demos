const puppeteer = require('puppeteer');

(async() => {

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.emulate({viewport: {width: 1366, height: 768}, userAgent: "Chrome"})
await page.goto('https://cosee.biz', {waitUntil: 'load'});
await page.screenshot({path: 'cosee.png', fullPage: true});

await browser.close();
})();
