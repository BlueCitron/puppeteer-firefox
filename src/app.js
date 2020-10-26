const puppeteer = require('puppeteer');

const environment = process.env.NODE_ENV || 'development';

const headless = environment !== 'development';
console.log('environment : ', environment);

(async () => {
    console.log('process start.');
    const browserFetcher = puppeteer.createBrowserFetcher({ product: 'firefox' });
    const revisionInfo = await browserFetcher.download('84.0a1');
    console.log('browser download complete.');
    const browser = await puppeteer.launch({
        product: 'firefox',
        headless: headless,
        slowMo: 60,
        defaultViewport: { width: 800, height: 800 }, // 엘리먼트를 찾아서 스크립트 작업을 하는경우 필요.
        args: ["--no-sandbox", "--disable-gpu", "--disable-web-security", "--wait-for-process"],
        executablePath: revisionInfo.executablePath,
    });


    const page = await browser.newPage();

    await page.goto('https://www.google.com');

    console.log('moved to google.');


    await browser.close();

    console.log('browser closed.');

})();