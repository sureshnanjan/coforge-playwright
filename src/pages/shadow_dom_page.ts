import { Page } from '@playwright/test';

export class HerokuappShadowDOMPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToShadowDOMPage() {
        await this.page.goto('https://the-internet.herokuapp.com/shadowdom');
    }

    async getShadowHost() {
        return await this.page.$('#content > div');
    }

    async getShadowRoot(host: any) {
        return await host.getShadowRoot();
    }

    async getShadowDOMElement(selector: string, root: any) {
        return await root.$(selector);
    }

    async getTextFromShadowDOMElement(selector: string, root: any) {
        const element = await this.getShadowDOMElement(selector, root);
        return await element?.innerText();
    }
}