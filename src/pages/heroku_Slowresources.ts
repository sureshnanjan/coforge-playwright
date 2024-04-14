import{Page,Locator} from '@playwright/test';
import { HerokuApp } from "./herokuapp";
import { promises } from 'dns';
 export class herokuslores extends HerokuApp{
    private title:string;



    constructor(apage: Page|undefined)
    {
        super(apage);
        this.title="";
    }
    async goToPage(url:string){
        return  this.page?.goto(url);
    }
    async getTitle():Promise<string|undefined>{
     
        return this.page?.title();
    }

    async gettext(): Promise<string|null|undefined>
    {
        return this.page?.locator("div[class='example'] p").textContent();
    }
    async getelapsetime(): Promise<number|null>
    {
        return 0
    }


 }