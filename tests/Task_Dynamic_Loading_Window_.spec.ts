
import { chromium, Browser, Page,test, expect } from '@playwright/test';

test('Test Case1',async()=>{

const browser: Browser = await chromium.launch();
// Create a new page
const page = await browser.newPage();
// Navigate to the URL
await page.goto('https://the-internet.herokuapp.com');
// Click the "Dynamic Loading" link
await page.getByText('Dynamic Loading').click()
// Reload the page
await page.reload();
// Click the "Element on page that is hidden" link
await page.getByText('Example 1: Element on page that is hidden').click()
// Click the "start" button
await page.getByText('Start').click()
// Wait until the page is loaded visible hellow world
await page.waitForSelector("//img[@src='/img/ajax-loader.gif']");
// Get the text of the "Hello World" element
await expect(page.getByText('Hello World!')).toBeVisible();
// Close the browser
await browser.close();
})

