import puppeteer from 'puppeteer';

export async function scraping(): Promise<boolean> {
  const browser = await puppeteer.launch({
    // args: ['--no-sandbox', '--disable-setuid-sandbox'],
    // headless: false,
    // executablePath: `/path/to/Chrome`,
    // devtools: false,
  });

  const page = await browser.newPage();

  // page.setDefaultNavigationTimeout(0);
  // await page.setViewport({ width: 588, height: 781 });

  // Navigate to Instagram
  await page.goto('https://www.advancelaminate.com');

  await page.screenshot({
    path: 'example.png',
    fullPage: true,
  });

  await browser.close();
  return true;
}

scraping();
