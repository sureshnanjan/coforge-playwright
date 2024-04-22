
import { Page } from '@playwright/test'
import { HerokuApp } from './herokuapp';


export class AddRemove extends HerokuApp {

    constructor(page:Page) {
        super(page);
    }
}
export class Add_removeele extends HerokuApp{

    getTitle():string{
        return ""
    }

    addElement(): void{
        return
    }
    getElement():string{
        return ""
    }

    removeElement(): void{
     return   
    }
}