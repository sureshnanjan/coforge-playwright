import { Page, Locator } from "@playwright/test";
import { HerokuApp } from "./herokuapp";
export class DisappereElement  {  
    constructor(argpage: Page | undefined) {
        this.argpage=argpage;

    }
async goToPage(url:string){
        return  this.page?.goto(url);
    }   
 async reloadingpage(){
    return this.page?.reload;  
 }
 async getAvailbleAllelement():string[]{
    return this.page?.locator('h1').textContent();
}
 async getelementstate():string{
    return "";

 }
   }    







