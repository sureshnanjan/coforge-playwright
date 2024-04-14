import { test, expect } from '@playwright/test';
import { AbTestPage } from '../src/pages/heroku_AB_test_page';

test('has title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('The Internet');
});

test('Home Page Has 44 Examples', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.locator('li')).toHaveCount(46);
});

test('Heading and SubheadIng Matches', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('heading', { name: 'Welcome to the-internet' }).click({
    button: 'right'
  });
  await page.getByRole('heading', { name: 'Welcome to the-internet' }).click({
    button: 'right'
  });
});

test ('AB Test Page Title is Correct,',()=>{
  const sa = new AbTestPage();
  const expected 

})

