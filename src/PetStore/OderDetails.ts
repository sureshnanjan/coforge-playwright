enum orderdetails {
    placed = "Placed",
    approved = "Approved",
    delivered = "Delivered"
}

class orderDetails 
{

    id: number;
    petId: number;
    quantity: number;
    shipDate: string;
    status: string;
    OrderStatus: orderdetails;

    constructor(id: number, petId: number, quantity: number, shipDate: string, status: string, OrderStatus: orderdetails)
    
    {
        this.id = id;
        this.petId = petId;
        this.quantity = quantity;
        this.shipDate = shipDate;
        this.status = status;
        this.OrderStatus = OrderStatus;
    }

    orderDetails()
    {
        console.log(this.id);
        console.log(this.petId);
        console.log(this.quantity);
        console.log(this.shipDate);
        console.log(this.status);
        console.log(this.OrderStatus);
    }
}

const orderInfo=new orderDetails(1,101,5,'08-04-2024','Sucess',orderdetails.approved);
orderInfo.orderDetails();