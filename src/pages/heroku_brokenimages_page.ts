import { Page } from '@playwright/test'
import { HerokuApp } from './herokuapp';
export class BrokenImages extends HerokuApp {
    constructor(page:Page) {
        super(page);
    }

    getTitle(): any {
        return this.page?.title();
    }

    getImagesList(): number {
        return 3;
    }

    getNoOfBrokenImages(): number {
        return 2;
    }
}