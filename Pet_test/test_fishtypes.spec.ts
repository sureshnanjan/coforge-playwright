import{ expect } from "chai";
import { fishtypes } from "../src/pets/petstore";

describe("This module test my fishtypes",function testcaseHandler()
{
it("Test name of the fish for the fishtypes",() =>{
    //Data name color size
    const idData=111;
    const nameData="angel"
    const sizeData=30;
    const colorData="orange";
    const expectedfish="angel";
    const actualData=new fishtypes(111,"angel","orage")
    const actual=actualData.name;
    expect(actual).equal(expectedfish);
})
it("Test id of the fish for the fishtypes",()=>{
    const idData=111;
    const nameData="angel";
    const sizeData=30;
    const colorData="orange";
    const expectedid=111;
    const actualData=new fishtypes(111,"angel","orage")
    const actual=actualData.id;
    expect(actual).equal(expectedid);

})
it("Test color of the fish for the fishtypes",()=>{
    const idData=111;
    const nameData="angel";
    const sizeData=30;
    const colorData="pink";
    const expectedcolor="pink";
    const actualData=new fishtypes(idData,nameData,colorData)
    const actual=actualData.color;
    expect(actual).equal(expectedcolor);

})




});