import { HerokuApp } from "../pages/herokuapp";
import { HerokuHomePage } from "../pages/heroku_home_page";
import { GetConfigFromJson } from "./json_util";
import { Page } from "@playwright/test";
/**
 * A utility class that exposes all the application configuration details as defined in the 
 * coforge.json file.
 */
export class AppUtil{
    static readonly config = GetConfigFromJson.getConfig();
    public static getUrl():string{
        const envirnmentToUse = this.config['use'];
        return this.config['environments'][envirnmentToUse].url;
    }

    static async createAppInstance(pageToUse:Page|undefined) {
        const webPage = new HerokuHomePage(pageToUse);
        await webPage.initialize();
        return webPage;
      }

}