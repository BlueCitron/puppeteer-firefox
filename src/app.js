const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({
        product: 'firefox',
        headless: false,
        slowMo: 60,
        defaultViewport: { width: 800, height: 800 }, // 엘리먼트를 찾아서 스크립트 작업을 하는경우 필요.
        args: ["--no-sandbox", "--disable-gpu", "--disable-web-security", "--wait-for-process"],
        // executablePath: '/usr/bin/chromium-browser'
    });


    const page = browser.newPage();

    await page.goto('www.google.com');

    console.log('moved to google.');


    await browser.close();

    console.log('browser closed.');

})();