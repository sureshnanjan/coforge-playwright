class Order{
    id:number;
    petId:number;
    quantity:number;
    shipDate:string;
    status:string;
    complete:boolean;
   
    constructor(){
        this.id=0;
        this.petId=0;
        this.quantity=0;
        this.shipDate="";
        this.status="";
        this.complete=true;
    }
}

enum Status{
    placed,
    approved,
    delivered
}