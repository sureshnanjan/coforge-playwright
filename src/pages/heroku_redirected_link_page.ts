import { Page, Locator } from "@playwright/test";
import { HerokuApp } from "./herokuapp";
class RedirectLinks {
 async goToPage(url:string){
        return  this.page?.goto(url);
    }
   async verifyredirectionpagetitle(){  
     return this.page?.title();
    }
 }