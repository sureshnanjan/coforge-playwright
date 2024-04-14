import { test, expect } from '@playwright/test';
import { HerokuappShadowDOMPage } from '../src/pages/shadow_dom_page';

test.describe('Herokuapp Shadow DOM Page', () => {
    let page: any;
    let shadowDOMPage: HerokuappShadowDOMPage;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        shadowDOMPage = new HerokuappShadowDOMPage(page);
        await shadowDOMPage.navigateToShadowDOMPage();
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should get text from shadow DOM element', async () => {
        const shadowHost = await shadowDOMPage.getShadowHost();
        const shadowRoot = await shadowDOMPage.getShadowRoot(shadowHost);
        const textInShadowDOM = await shadowDOMPage.getTextFromShadowDOMElement('#shadow-content', shadowRoot);

        expect(textInShadowDOM).toContain('This is the inner text of the shadow DOM');
    });
})