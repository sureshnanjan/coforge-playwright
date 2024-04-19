import{Page,Locator} from '@playwright/test';
import { HerokuApp } from './herokuapp';
import { NodeBuilderFlags } from 'typescript';
export class challengingdom extends HerokuApp{

private title:string;
private text:string;
constructor(apage:Page|undefined){

    super(apage);
    this.title="";
    this.text="";

}
async goToPage(url:string){
    return  this.page?.goto("https://the-internet.herokuapp.com/challenging_dom");
}

async getTitle():Promise<string|undefined>{

        
    return this.page?.title();
}

async getPara():Promise<string|undefined|null>{

    //return this.page?.getByRole("heading").textContent();

    return this.page?.locator("div[class='example'] p").textContent();
}

async getbarbutton():Promise<void>{
    return this.page?.locator("//a[@class='button']").click();
}
async getfoobutton():Promise<void>
{
    return this.page?.locator('//a[@class="button alert"]').click(); 
}

async getbazbutton():Promise<void>
{
    return this.page?.locator("//a[@class='button success']").click(); 
}
async gettable():Promise<void>
{
    return this.page?.locator("//div[@class='large-10 columns']//table").click();
}
async getinnnertext():Promise<string|undefined>
{
    return this.page?.locator("//canvas[@id='canvas']").innerText();
}
async getcol1heading():Promise<string|null|undefined>
{
    return this.page?.locator("//th[normalize-space()='Lorem']").textContent();
}
async getcol2heading():Promise<string|null|undefined>
{
    return this.page?.locator("//th[normalize-space()='Ipsum']").textContent();
}
async getcol3heading():Promise<string|null|undefined>
{
    return this.page?.locator("//th[normalize-space()='Dolor']").textContent();
    
}
async getcol4heading():Promise<string|null|undefined>
{
    return this.page?.locator("//th[normalize-space()='Sit']").textContent();
}
async getcol5heading():Promise<string|null|undefined>
{
    return this.page?.locator("//th[normalize-space()='Sit']").textContent();
}
async getcol6heading():Promise<string|null|undefined>
{
    return this.page?.locator("//th[normalize-space()='Diceret']").textContent();
}
async getcol7heading():Promise<string|null|undefined>
{
    return this.page?.locator("//th[normalize-space()='Action']").textContent();
}
async getedit():Promise<void>
{
    return this.page?.locator("//td/a[@href='#edit']").click();
}
async getdelete():Promise<void>
{
    return this.page?.locator("//td/a[@href='#delete']").click();
}
async getrow1data():Promise<string|null|undefined>
{
    return this.page?.locator("//tbody/tr[1]").textContent();
}
async getrow2data():Promise<string|null|undefined>
{
    return this.page?.locator("//tbody/tr[2]").textContent();
}
async getrow3data():Promise<string|null|undefined>
{
    return this.page?.locator("//tbody/tr[3]").textContent();
}
async getrow4data():Promise<string|null|undefined>
{
    return this.page?.locator("//tbody/tr[4]").textContent();
}
async getrow5data():Promise<string|null|undefined>
{
    return this.page?.locator("//tbody/tr[5]").textContent();
}
async getrow6data():Promise<string|null|undefined>
{
    return this.page?.locator("//tbody/tr[6]").textContent();
}
async getrow7data():Promise<string|null|undefined>
{
    return this.page?.locator("//tbody/tr[7]").textContent();
}
async getrow8data():Promise<string|null|undefined>
{
    return this.page?.locator("//tbody/tr[8]").textContent();
}
async getrow9data():Promise<string|null|undefined>
{
    return this.page?.locator("//tbody/tr[10]").textContent();
}
}