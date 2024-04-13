import { chromium, devices, Page } from 'playwright';
import { BrowserUtils } from '../utilities/browser_util';

export class HerokuApp{
protected page:Page | undefined

constructor(argPage: Page | undefined){
    if (argPage != undefined) {
        this.page = argPage;
    }
    else{
        BrowserUtils.getBrowser().then(page =>{
            this.page = page;})
    }
}
}