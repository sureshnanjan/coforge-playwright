//"use strict";
class mproperties{
    id:number;
    username : string;
    firstName : string;
    lastName : string;
    email : string;
    password : string;
    phone : string;
    userStatus : number;
    constructor()
    {
        this.id=123;
        this.username="samn";
        this.firstName="sai";   
        this.lastName="RAM";
        this.email="abc@123";
        this.password="12345";
        this.phone="2234445";
        this.userStatus=12222;
    }
    
  
 
}
const my1=new mproperties();
console.log(my1);
 
 
class order1{
id : number;
petid : number;
quantity : number;
shipdate : string;
status:sts;
complete:boolean;
 
constructor()
{
    this.id=22;
    this.petid=33;
    this.quantity=40;
    this.shipdate="20-02-24";
    this.status=sts.placed,
    this.complete=true;
 
}
}
enum sts{
    placed="placed",
    approved="approved",
    delivered="delivered"
 
}
const myorderpls=new order1();
console.log(myorderpls);
class tagpet
{
    id: number;
    name: string;
    constructor()
    {
        this.id=1111;
        this.name="sai";
    }
}
const mytagpet=new tagpet()
console.log(tagpet);