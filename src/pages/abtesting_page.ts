import { Page } from "@playwright/test";

/**
 * 
 */
export class ABTestingPage{
    readonly Page:Page
    /**
     * 
     * @returns 
     */
    getHeading():Promise<null|string>{
        // return the heading
        return "";
        // #content > div > h3 - CSS Selector
        // //*[@id="content"]/div/h3 = XPath
        // ARIA Roles 
        //this.page.locator("")
        return this.page.getByRole("heading").textContent();

    }

    /**
     * 
     * @returns 
     */

    getDescriptionText():string{

        // code to return the text of paragraph
        return "";
    }

    // This is my help
    /**
     * This is a mechanism to disable AB Testing 
     */
    disableABTesting(){
        // Do athe automatic setting of cookie
        this.page.context().addCookies([{"name":'optimizelyOptOut',"value": 'true'}])
    }

}