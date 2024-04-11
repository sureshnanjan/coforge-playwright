class order{

    id: number;
    petId:number;
    quantity:number;
    shipdate:String;
    status: String;
    complete:boolean;

    constructor(){
        this.id=0;
        this.petId=0;
        this.quantity=0;
        this.shipdate="";
        this.status="";
        this.complete=true;
         
}
}
const Status = {
    PLACED: 0,
    APPROVED: 1,
    DELIVERED: 2

}
