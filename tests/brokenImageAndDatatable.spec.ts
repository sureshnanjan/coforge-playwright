import { test, expect } from '@playwright/test';
import {BrokenImages} from '../src/pages/heroku_brokenimages_page';
import {SortableDataTables} from '../src/pages/heroku_sortabledatatables_page';


test.describe("Heroku App - Broken Images and Sortable data table",()=>{
    test("Broken Images", async ({page})=>{
      const brokenImages = new BrokenImages(page);
      const title=await brokenImages.getTitle();
      expect(title).toHaveText('Broken Images');
      const images=await brokenImages.getImagesList();
      expect(images).toEqual(3);
      const brokenImagesawait = brokenImages.getNoOfBrokenImages();
      expect(brokenImagesawait).toEqual(2);
   
    } )

    test("Sortable data tables", async ({page})=>{
        const sortabledata = new SortableDataTables(page);
        await sortabledata.getTitle();
        const tableData=await sortabledata.getTableData();
     
      } )
})