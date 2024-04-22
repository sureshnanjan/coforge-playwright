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
      expect(images).toEqual();
      const brokenImagesawait = brokenImages.getNoOfBrokenImages();
      expect(brokenImagesawait).toEqual(2);
    }
    });




    const brokenImages = new BrokenImages(page);
    const title=await brokenImages.getTitle();
    expect(title).toHaveText('Broken Images');
    const images=await brokenImages.getImagesList();
    expect(images).toEqual(3);
    const brokenImagesawait = brokenImages.getNoOfBrokenImages();
    expect(brokenImagesawait).toEqual(2);
 
  } )
