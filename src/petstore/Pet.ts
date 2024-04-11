import { StringLiteral } from "typescript";

class pet{
id:number;
Category:Object;
name:String;
photoUrls:String;
Tags:Object;
status:String;

constructor(){
this.id=0;
this.Category="";
this.name="";
this.photoUrls="";
this.Tags="";
this.status="";
}

}

const Status = {
    AVAILABLE: 0,
    PENDING: 1,
    SOLD: 2
}