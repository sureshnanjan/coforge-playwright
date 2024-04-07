import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('The Internet');
  const totalLinks = (await page.$$("#content>ul>li>a")).length
  await expect(totalLinks).toEqual(44);


});




