

//  import { Page } from '@playwright/test'
// import { HerokuApp } from './herokuapp';
import { Page } from '@playwright/test'
import { HerokuApp } from './herokuapp';
export class heroku_typos_page extends HerokuApp {

    constructor(page: Page) {
        super(page);
    }

}

export class HerokuTyposPages extends HerokuApp {
    // Method to get the tile heading
    getTitle(): string {
        return ""
    }
    // method to get paragraph
    getParagraph(): string {
        return ""
    }
}

