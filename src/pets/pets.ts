class propertie{
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
const myproperties1=new propertie();
console.log(myproperties1);


class order{
id : number;
petid : number;
quantity : number;
shipdate : string;
status:ors;
complete:boolean;

constructor()
{
    this.id=22;
    this.petid=33;
    this.quantity=40;
    this.shipdate="20-02-24";
    this.status=ors.placed,
    this.complete=true;

}
}
enum ors{
    placed="placed",
    approved="approved",
    delivered="delivered"

}
const my=new order();
console.log(my);
class tags
{
    id: number;
    name: string;
    constructor()
    {
        this.id=1111;
        this.name="sai";
    }
}
const mytags=new tags()
console.log(mytags);

/*class pet{
id: number
name : string;

const photourls=[


    name : 'photourls',

];


constructor(){
    this.id=77;
    this.name="doggie";
    this.name='ww';

}

}
*/





















