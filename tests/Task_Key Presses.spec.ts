import { chromium, Browser, Page,test, expect } from '@playwright/test';

test('Key Press',async()=>{
const browser: Browser = await chromium.launch();
// Create a new page
const page = await browser.newPage();
// Navigate to the URL
await page.goto('https://the-internet.herokuapp.com');
// Click the "Key Presses" link
await page.getByText('Key Presses').click();
// Reload the page
await page.reload();
//Press a key and see what you inputted
await page.fill('//input[@type="text"]','55');
//wait a browser
await page.waitForTimeout(2000);
// Get the text of the "R" element
// await expect(page.getByText('You entered: t')).toBeVisible();
// Close the browser
await browser.close();

})
