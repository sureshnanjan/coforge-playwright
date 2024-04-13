import { Page, chromium, devices } from "@playwright/test";
import {readFileSync} from "fs";

export class BrowserUtils{
    static async getBrowser():Promise<Page>{
        const config = JSON.parse(readFileSync('../coforge.json','utf-8'));
        const activeConfig = config.environments[config.use];
        switch (activeConfig.browser) {
            case "chrome":
                return (await (await chromium.launch()).newContext(devices[activeConfig.device])).newPage();
            default:
                const browser = await chromium.launch();
                const context = await browser.newContext(devices['Desktop Chrome']);
                return context.newPage();
                break;
                
        }
    }
}