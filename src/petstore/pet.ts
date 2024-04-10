enum OrderStatus {
    placed = "placed",
    approved ="approved",
    delivered = "delivered",
}
class Order {
    id:number;
    petId : number;
    quantity : number;
    shipDate : string;
    status :OrderStatus;
    complete : boolean;
    constructor(
        id:number,
        petId : number,
        quantity : number,
        shipDate : string,
        status :OrderStatus = OrderStatus.placed,
        complete : boolean,

    ){
        this.id=id;
        this.petId=petId;
        this.quantity=quantity;
        this.shipDate=shipDate;
        this.status=status;
        this.complete=complete;
    }
}
const myOrder = new Order(1,10,2,"2024-04-08",OrderStatus.placed,true);
console.log(myOrder);
