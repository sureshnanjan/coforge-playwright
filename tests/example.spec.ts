import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('The Internet');
});

test('Home Page Has 44 Examples', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.locator('li')).toHaveCount(44);
});
/*
This test funtion will assert that both Heading and Sub-heading have desired text
*/
test('Heading and SubheadIng Matches', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  var headingString = await page.locator("h1").innerText();
  await expect(headingString).toStrictEqual("Welcome to the-internet") 

  var subheadingString = await page.locator("h2").innerText();
  await expect(subheadingString).toStrictEqual("Available Examples")
  
});




test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

