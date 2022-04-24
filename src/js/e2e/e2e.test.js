import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('Popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8888';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 150,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  test('should show popover', async () => {
    await page.goto(baseUrl);
    const button = await page.$('.popover-button');
    await button.click();
    await page.waitForSelector('.popover');
  });
});
