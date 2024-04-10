import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toContainText("Welcome to the-internet")
  await expect(page.getByRole('heading', { name: 'Available Examples' })).toContainText("Available Examples")
 
});