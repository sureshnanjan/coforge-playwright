import { Page, Locator } from "@playwright/test";
import { HerokuApp } from "./herokuapp";

export class HerokuHomePage extends HerokuApp{
    private title:string;
    private subtitle:string;

    /**
     *
     */
    constructor(argpage: Page | undefined) {
        super(argpage);
        this.title = "h1";
        this.subtitle = "h2";

        
    }

    async getTitle():Promise<string|undefined>{

            
        return this.page?.title();
    }

    async getHeading():Promise<string|undefined|null>{
    
        //return this.page?.getByRole("heading").textContent();
        console.table(this.page)
        return this.page?.locator('h1').textContent();
    }

    
}