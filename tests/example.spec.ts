import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('The Internet');

  test('TitleandsubTitle', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toContainText("Welcome to the-internet")
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toContainText("Available Examples")
   
  })

test('Home page heading and subheading', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  //const tit=await page.getByRole('heading', { name: 'Welcome to the-internet' });
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toHaveText('Welcome to the-internet12');
  //console.assert(page.getByRole('heading', { name: 'Welcome to the-internet' }),'Welcome to the-internet6');
 
  //const tit1=await page.getByRole('heading', { name: 'Available Examples6' });
  await expect(page.getByRole('heading', { name: 'Available Examples' })).toHaveText('Available Examples');
  //console.assert(tit1,"true");
});

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