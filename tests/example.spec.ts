import { test, expect } from '@playwright/test';
import { HerokuHomePage } from '../src/pages/heroku_home_page';


test('has title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('The Internet');
  });

 

test('Home Page Has 44 Examples', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/')
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

  // Check the Main Heading
  // Check The Sub heading
  // Test
});

test("Test heading",()=>{
  // A
  // A One ACtion SRP - Inputs and Outputs
  // status message
  // auditlog updation
  // display time lgogg


})
test.describe("Heroku App Scenarios",()=>{
  test("Page Objects Test", async ({page})=>{
    const hp = new HerokuHomePage(page);
    await hp.goToPage("https://the-internet.herokuapp.com/")
    const actual = await hp.getTitle()
    expect(actual).toEqual('The Internet');
  } )

  test.only("Page Heading Matches", async ({page})=>{
    /// AAA
    const hp = new HerokuHomePage(page);
    const expected = "Welcome to the-internet";
    await hp.goToPage("https://the-internet.herokuapp.com/")
    const actualHeading = await hp.getHeading();
    expect(actualHeading).toEqual(expected);
  });


})
test("Test Paragrapg",()=>{})



