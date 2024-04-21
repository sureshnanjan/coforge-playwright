import {Given,When,Then} from "@cucumber/cucumber"
import { HerokuHomePage } from "../../pages/heroku_home_page";
import { HerokuApp } from "../../pages/herokuapp";
import { AppUtil } from "../../utilities/app_util";
import { expect } from "chai";
var actualTitle:string|null|undefined;
var page:HerokuHomePage;

Given('I visit heroku app', async function () {
    // Write code here that turns the phrase above into concrete actions
     page = await AppUtil.createAppInstance(undefined);
     page.goToHomePage();
});
When('I check title', async function () {
    // Write code here that turns the phrase above into concrete actions
    actualTitle = await page.getPageHeading();
  });
Then('I have contents', async function () {
    expect(actualTitle).to.be.eq("Welcome to the-internet")
});
