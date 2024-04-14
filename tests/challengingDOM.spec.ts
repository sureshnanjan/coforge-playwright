import { test, expect } from '@playwright/test';
import { challengingdom } from '../src/pages/heroku_challengingdom';
test('challenging DOM title', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected = 'Challenging DOM';
    const actual = await cdom.getTitle();
    await expect(actual).toEqual(expected);
})

test('paragraph checking', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected = 'Challenging DOMThe hardest part in automated web testing is finding the best locators (e.g., ones that well named, unique, and unlikely to change). It's more often than not that the application you're testing was not built with this concept in mind. This example demonstrates that with unique IDs, a table with no helpful locators, and a canvas element.';
    const actual = await cdom.getPara();
    await expect(actual).toEqual(expected);
})

test('Qux button', async ({ page }) => {
    const cdom = new challengingdom(page);
    await cdom.getbarbutton();
})

test('baz button', async ({ page }) => {
    const cdom = new challengingdom(page);
    await cdom.getbazbutton();
})
test('Bar button', async ({ page }) => {
    const cdom = new challengingdom(page);
    await cdom.getbarbutton();
})
test('Table', async ({ page }) => {
    const cdom = new challengingdom(page);
    await cdom.gettable();
})
test('Inner text', async ({ page }) => {
    const cdom = new challengingdom(page);
    await cdom.getinnnertext();
})
test('column one heading', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Lorem';
    const actual=await cdom.getcol1heading();
    await expect(expect).toEqual(actual);
})
test('column two heading', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Ipsum';
    const actual=await cdom.getcol2heading();
    await expect(expect).toEqual(actual);
})
test('column three heading', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Dolor';
    const actual=await cdom.getcol3heading();
    await expect(expect).toEqual(actual);
})
test('column four heading', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Sit';
    const actual=await cdom.getcol4heading();
    await expect(expect).toEqual(actual);
})
test('column five heading', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Amet';
    const actual=await cdom.getcol5heading();
    await expect(expect).toEqual(actual);
})
test('column six heading', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Diceret';
    const actual=await cdom.getcol6heading();
    await expect(expect).toEqual(actual);
})
test('column seven heading', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Action';
    const actual=await cdom.getcol7heading();
    await expect(expect).toEqual(actual);
})

test('click edit button', async ({ page }) => {
    const cdom = new challengingdom(page);
    await cdom.getedit();
})
test('click delete button', async ({ page }) => {
    const cdom = new challengingdom(page);
    await cdom.getdelete();
})

test('check row one details', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Iuvaret0';
    const actual=cdom.getrow1data();
    await expect(expect).toEqual(actual);
})

test('check row two details', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Iuvaret1';
    const actual=cdom.getrow2data();
    await expect(expect).toEqual(actual);
})
test('check row three details', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Iuvaret3';
    const actual=cdom.getrow3data();
    await expect(expect).toEqual(actual);
})
test('check row four details', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Iuvaret4';
    const actual=cdom.getrow4data();
    await expect(expect).toEqual(actual);
})
test('check row five details', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Iuvaret5';
    const actual=cdom.getrow5data();
    await expect(expect).toEqual(actual);
})
test('check row six details', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Iuvaret6';
    const actual=cdom.getrow6data();
    await expect(expect).toEqual(actual);
})
test('check row seven details', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Iuvaret7';
    const actual=cdom.getrow7data();
    await expect(expect).toEqual(actual);
})
test('check row eight details', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Iuvaret8';
    const actual=cdom.getrow8data();
    await expect(expect).toEqual(actual);
})
test('check row three details', async ({ page }) => {
    const cdom = new challengingdom(page);
    const expected='Iuvaret9';
    const actual=cdom.getrow9data();
    await expect(expect).toEqual(actual);
})