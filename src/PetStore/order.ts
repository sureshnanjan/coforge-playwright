enum orderStatus {
    placed = "Placed",
    approved = "Approved",
    delivered = "Delivered"
}

class order {

    id: number;
    petId: number;
    quantity: number;
    shipDate: string;
    status: string;
    OrderStatus: orderStatus;

    constructor(id: number, petId: number, quantity: number, shipDate: string, status: string, OrderStatus: orderStatus) {
        this.id = id;
        this.petId = petId;
        this.quantity = quantity;
        this.shipDate = shipDate;
        this.status = status;
        this.OrderStatus = OrderStatus;
    }

    orderDetails(){
        console.log(this.id);
        console.log(this.petId);
        console.log(this.quantity);
        console.log(this.shipDate);
        console.log(this.status);
        console.log(this.OrderStatus);
    }
}

const orderInfo=new order(1,101,5,'07-04-2024','Sucess',orderStatus.approved);
orderInfo.orderDetails();
