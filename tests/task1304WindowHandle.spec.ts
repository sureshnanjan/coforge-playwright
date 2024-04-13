import { test, expect } from '@playwright/test';
import {MultipleWindowHandlePage  } from '../src/pages/heroku_multiple_windows_page';

const testData ={
    URL :"https://the-internet.herokuapp.com/windows"
}

test.describe("Heroku App - Multiple window Handle",()=>{
    test("Multiple window Handle - Redirect to new window", async ({page})=>{
      const hp = new MultipleWindowHandlePage(page);
      await hp.open(testData.URL);
      await hp.clickLink();
      await page.waitForLoadState();
      await hp.switchToNewWindow()
      const getWindowTitle = hp.getTextFromNewWindow();
      console.log('text',getWindowTitle);
     
    } )
})
