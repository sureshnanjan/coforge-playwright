import { test, expect } from '@playwright/test';
import {Add_removeele} from '../src/pages/Add_remove';
import {HerokuTyposPages} from '../src/pages/heroku_typos_page';


test.describe("Heroku App - Addremovelements And Typos",()=>{
    test("Add remove elements", async ({page})=>{
      const addelements = new Add_removeele(page);
      const title=await addelements.getTitle();
      const expect :any
      expect (title).toHaveText('Add/Remove Elements');
      const addElement =await addelements ();
      expect().toEqual();
      
    }
    });




   