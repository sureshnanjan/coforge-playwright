import { chromium, devices, Page } from 'playwright';
import { BrowserUtils } from '../utilities/browser_util';
import { AppUtil } from '../utilities/app_util';

export class HerokuApp{
private pagePromise: Promise<Page>|undefined;
protected page:Page | undefined;
protected url:string;
/**
 * The constructor handles both the scenarios for using the page both from the 
 * playwright test runners or as a libray when used from BDD Step definitions.
 * If a page instance is provide it will use it otherwise it will create a Page
 * as per the configuration defined in the coforge.json
 */
constructor(argPage: Page | undefined){
    if (argPage != (undefined)) {
        this.page = argPage;
    }
    else{
        this.pagePromise = BrowserUtils.getBrowser();
    }
    this.url = AppUtil.getUrl();
    console.log(`Resolved url to: ${this.url}`);
    console.log(`Got the Page as ${this.page}`)
}
async initialize(){
    if (this.page == undefined) {
        this.page = await this.pagePromise;
    }
    
}
async goToHomePage(){
    return  this.page?.goto(this.url);
}

async getPageHeading():Promise<string|undefined|null>{
    return this.page?.locator("h1").textContent();
}

async CloseBrowser(){
    this.page?.close();
}

}