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

test("Basic authentication Works for admin",async ({page}, {})=>{
  await page.goto('https://the-internet.herokuapp.com/basic_auth'); 
  const actualtitle = await page.title();

  expect(actualtitle).toEqual("the-internet")
  
})

test("Alert Text matches" , async ({page})=>{
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts'); 
  await page.getByRole("button").first().click()

  const result = await page.locator("#result").textContent()

  expect(result).toEqual("You successfully clicked an alert wrong")

});

test("I can say OK to a confirm Alert" , async ({page})=>{
  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.dismiss();
    });

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts'); 
  await page.locator("//*[@id='content']/div/ul/li[2]/button").click();
  const result = await page.locator("#result").textContent()
  expect(result).toEqual("You clicked: Cancel")

});

test("Uploading a file works", async ({page})=>{
  page.on("filechooser", chooseFile =>{
    //console.log(chooseFile.element())
    console.log(chooseFile.isMultiple())
    console.log(chooseFile.page)
    chooseFile.setFiles("C:\\Tools\\logparser.log");
  })

  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.locator("#file-upload").click()
  await page.locator("#file-submit").click()
  const result = await page.locator("#uploaded-files").textContent()
  console.log(result)
})

test("Checking Image1 for valid file name", async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/broken_images');
    const result = await page.locator("//*[@id='content']/div/img[3]").getAttribute("src")
    expect(result).toContain("img/");

});

test.only("Geo Location page works OK", async ({page})=>{
  //test.setTimeout(5000);
  await page.goto('geolocation')
  //await page.locator("#content > div > button").click();
  await page.getByRole("button").first().click();
  const lat_value = await page.locator("#lat-value").textContent();
  const long_value = await page.locator("#long-value").textContent();
  console.log(`${lat_value} : ${long_value}` )
});

test("Hovering over Image1 works",async ({page})=>{
  await page.goto("https://the-internet.herokuapp.com/hovers")
  await page.locator("#content > div > div:nth-child(3) > img").hover()
  


});

test("Frame reading works", async ({page})=>{
  await page.goto("https://the-internet.herokuapp.com/nested_frames")
  //const result = await page.locator("body").allTextContents()
  const result = await page.frameLocator('frame[name="frame-top"]').frameLocator('frame[name="frame-left"]').getByText('LEFT').allInnerTexts()
  //page.getByRole("")
  await expect(result[0]).toEqual("LEFT")  
});

test("JQuery UI Menus works OK", async ({page})=>{
  await page.goto('https://the-internet.herokuapp.com/jqueryui/menu');
  await page.getByRole('link', { name: 'Excel' }).click({
    button: 'right'
  });
  await page.getByRole('link', { name: 'Downloads' }).click({
    button: 'right'
  });
 

});

test.use({ viewport: { width: 1600, height: 1200 } });
test("Context Menu Page works", async ({page})=>{
  let result = ""
  page.on("dialog", function(dialog){
    result = dialog.message();
    dialog.accept()
  })
    //do right click
  // capture the text from the dialog
  await page.goto("context_menu");
  await page.locator("#hot-spot").click({
    button: "right",
    position: {x:10, y:10},
    force: true
  })
  /*
  const dialogPromise = await page.waitForEvent("dialog");
  const dialogHandler = dialogPromise
  const message = dialogHandler.message()
  dialogHandler.accept();
  */
  expect(result).toEqual("fails")


});
  







