import { Page, Locator } from "@playwright/test";
import { HerokuApp } from "./herokuapp";
export class RedirectLinks {
 async goToPage(url:string){
        return  this.page?.goto(url);
    }
   async verifyredirectionpagetitle(){  
     return this.page?.title();
}
async clickredirect(){

}
async verifystatuscodepage(){


}
async getallstatuscodes(){

}
async clcikonstatuscode(statuscode:number){


}
 }