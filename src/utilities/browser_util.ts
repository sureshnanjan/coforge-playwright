import { Page, chromium, devices, firefox } from "@playwright/test";
import {readFileSync} from "fs";
import { GetConfigFromJson } from "./json_util";

export class BrowserUtils{
    static async getBrowser():Promise<Page>{
        //const config = JSON.parse(readFileSync('../coforge.json','utf-8'));
        const config = GetConfigFromJson.getConfig();
        const activeConfig = config.environments[config.use];
        switch (activeConfig.browser) {
            case "chrome":
                return (await (await chromium.launch({headless: false})).newContext(devices['Desktop Chrome'])).newPage();
            case "firefox":
                return (await (await firefox.launch({headless: false})).newContext(devices['Desktop Firefox'])).newPage();
            default:
                const browser = await chromium.launch();
                const context = await browser.newContext(devices['Desktop Chrome']);
                return context.newPage();
                break;
                
        }
    }
}