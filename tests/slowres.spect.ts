import { test, expect } from '@playwright/test';
import { herokuslores } from '../src/pages/heroku_Slowresources'
test('slow resources title', async ({ page }) => {
    
    // Expect a title "to contain" a substring.
    const sl = new herokuslores(page);
    const expected='Slow Resources';
    const actual= await sl.getTitle();
    await expect(actual).toEqual(expected);
});
test('slow resources text', async ({ page }) => {
    
    // Expect a title "to contain" a substring.
    const sp = new herokuslores(page);
    const expected = await sp.gettext();
    const text="At times it can take a while for third-party site resources to load (e.g., tracking code javascript, social networking widgets, etc.). This example has a rogue GET request that takes 30 seconds to complete."
    await expect(expected).toEqual(text);
});
