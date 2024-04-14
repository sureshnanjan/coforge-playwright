import { test, expect } from '@playwright/test';
import { HerokuHomePage } from '../src/pages/heroku_home_page';
import { AppUtil } from '../src/utilities/app_util';
import { ABTestingPage } from '../src/pages/abtesting_page';
import { Editor } from '../src/pages/wsiwgs_editor_page';
import exp from 'constants';


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
    await hp.goToHomePage();
    const actual = await hp.getTitle()
    expect(actual).toEqual('The Internet');
  } )

  test("Page Heading Matches", async ({page})=>{
    /// AAA
    const hp = await AppUtil.createAppInstance(undefined);
    const expected = "Welcome to the-internet";
    await hp.goToHomePage();
    const actualHeading = await hp.getPageHeading();
    expect(actualHeading).toEqual(expected);
  });


})
test("AB Testing returns random page",()=>{
  const myabtestPage = new ABTestingPage();
  const expected = "AB Variattion1";
  const actual = myabtestPage.getHeading();
  expect(actual).toEqual(expected);
})

test("AB Testing returns exact page when cookie is added",()=>{
  const myabtestPage = new ABTestingPage();
  myabtestPage.disableABTesting();
  const expected = "No A/B Test";
  const actual = myabtestPage.getHeading();
  expect(actual).toEqual(expected);
})

test("Editor input text works OK",()=>{
  // Arrange
 const app:Editor = new Editor();
 const inputtext:string = "This is what i typed";
 app.textType(inputtext); 
 // Act
 const result = app.getTextFromEditor();

 expect(inputtext).toEqual(result);
})

test("Editor align Left text works OK",()=>{
  // Arrange
 const app:Editor = new Editor();
 const inputtext:string = "This is what i typed";
 app.textType(inputtext); 
 app.alignLeft();
 // Act
 const result = app.getTextFromEditor();
 const align = app.getCurrentalignment();

 expect(inputtext).toEqual(result);
 expect(align).toEqual("Left")
})


