import { test, expect } from '@playwright/test';
import { HerokuappContextMenuPage } from '../src/pages/context_menu_page';

test.describe('Herokuapp Context Menu Page', () => {
    let page: any;
    let contextMenuPage: HerokuappContextMenuPage;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        contextMenuPage = new HerokuappContextMenuPage(page);
        await contextMenuPage.navigateToContextMenuPage();
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should open context menu', async () => {
        await contextMenuPage.getContextMenu();
        const isContextMenuVisible = await contextMenuPage.isContextMenuVisible();

        expect(isContextMenuVisible).toBeTruthy();
    });

    test('should select option from context menu', async () => {
        await contextMenuPage.getContextMenu();
        await contextMenuPage.clickOption('Edit');
    })
})