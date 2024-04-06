import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('heading', { name: 'Welcome to the-internet' }).click();
  await page.getByRole('heading', { name: 'Available Examples' }).click();
});