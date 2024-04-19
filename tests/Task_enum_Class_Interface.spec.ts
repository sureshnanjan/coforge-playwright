import { Page, test,expect } from "@playwright/test";
 
test('Heading and SubheadIng Matches', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const header1Txt = await page.getByRole('heading', { name: 'Welcome to the-internet' }).textContent();
    expect(header1Txt).toBe('Welcome to the-internet')

    const header2Txt = await page.getByRole('heading', { name: 'Available Examples' }).textContent();
    expect(header2Txt).toBe('Available Examples')
  
    
});