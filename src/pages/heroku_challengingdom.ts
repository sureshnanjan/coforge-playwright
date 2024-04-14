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
    return  this.page?.goto(url);
}

async getTitle():Promise<string|undefined>{

        
    return this.page?.title();
}

async getPara():Promise<string|undefined|null>{

    //return this.page?.getByRole("heading").textContent();

    return this.page?.locator("div[class='example'] p").textContent();
}

async getquxbutton():Promise<void>{
    return this.page?.locator("").click();
}
async getbazbutton():Promise<void>
{
    return this.page?.locator("").click(); 
}

async getbarbutton():Promise<void>
{
    return this.page?.locator("").click(); 
}
async gettable():Promise<void>
{
    return this.page?.locator("").click();
}
async getinnnertext():Promise<string|undefined>
{
    return this.page?.locator("").innerText();
}
async getcol1heading():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getcol2heading():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getcol3heading():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
    
}
async getcol4heading():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getcol5heading():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getcol6heading():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getcol7heading():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getedit():Promise<void>
{
    return this.page?.locator("").click();
}
async getdelete():Promise<void>
{
    return this.page?.locator("").click();
}
async getrow1data():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getrow2data():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getrow3data():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getrow4data():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getrow5data():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getrow6data():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getrow7data():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getrow8data():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
async getrow9data():Promise<string|null|undefined>
{
    return this.page?.locator("").textContent();
}
}