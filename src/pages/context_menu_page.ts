import { Page } from "@playwright/test";

export class HerokuappContextMenuPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToContextMenuPage() {
        await this.page.goto('https://the-internet.herokuapp.com/context_menu');
    }

    async getContextMenuArea() {
        return await this.page.$('#hot-spot');
    }

    async getContextMenu() {
        return await this.page.$('.context-menu');
    }

    async getContextMenuOptions() {
        return await this.page.$$('.context-menu-list > li');
    }

    async getOptionByText(optionText: string) {
        return await this.page.$('.context-menu-list > li >> text=${optionText}');
    }

    async isContextMenuVisible() {
        return await this.page.isVisible('.context-menu');
    }

    async isOptionVisible(optionText: string) {
        return await this.page.isVisible('.context-menu-list > li >> text=${optionText}');
    }

    async clickOption(optionText: string) {
        const option = await this.getOptionByText(optionText);
        await option?.click();
    }
}