import { Page } from 'playwright';

export class MultipleWindowHandlePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Launch Application url
     * @param url 
     */
    async launchAppUrl(url:string) {
        await this.page.goto(url);
    }

    async clickLink() {
        await this.page.click('a[href="/windows/new"]');
        await this.page.waitForTimeout(5000)
    }

    async switchToNewWindow() {
        const windows = this.page.context().pages();
        const newWindow = windows[windows.length - 1];
        await newWindow.waitForLoadState();
        console.log('New window url', newWindow.url())
        return newWindow;

        

    }

    async getTextFromNewWindow() {
        const newWindow = await this.switchToNewWindow();
        return await newWindow.$eval('h3', (element) => element.textContent);
        // return await newWindow.textContent('h3');
    }

    async closeNewWindow() {
        const newWindow = await this.switchToNewWindow();
        await newWindow.close();
    }
}
