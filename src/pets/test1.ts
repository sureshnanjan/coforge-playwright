import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  const test1=await page.getByRole('heading', { name: 'Welcome to the-internet' }).textContent();
  const test2=await page.getByRole('heading', { name: 'Available Examples' }).textContent();
  expect(test1).toEqual('Welcome to the-internet' );
  expect(test2).toEqual('Available Examples'  );
});