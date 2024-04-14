import {Page } from 'playwright';
import { HerokuApp } from './herokuapp';
export class SortableDataTables extends HerokuApp{
    constructor(page:Page) {
        super(page);
    }

    getTitle(): any {
        return this.page?.title();
    }

    getTableData(): any[] {
        const tableRows = null;
        const data = [];
        for (const row of tableRows) {
            const columns = row.$$('td');
            const lastName = columns[0].innerText();
            const firstName = columns[1].innerText();
            const email = columns[2].innerText();
            const due = columns[3].innerText();
            const website = columns[4].innerText();
            data.push({ lastName, firstName, email, due, website });
        }
        return data;

    }
}