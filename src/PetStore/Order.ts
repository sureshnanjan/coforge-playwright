 
 enum Pet_Status {
    AVAILABLE,
    PENDING,
    SOLD
 }

 enum Pet_OrderStatus{
    PLACED,
    APPROVED,
    DELIVERED
 }

 class PetApp{
  private id: number;
  private name: string;
  private status: Pet_Status;

  constructor(){
      this.id = 1314;
      this.name = 'DogA'
      this.status = Pet_Status.SOLD

  }

  callPet(){
    console.log(`Calling pet - ${this.name}`)
  }
}

const pet = new PetApp()
pet.callPet();


class Pet_Order{
  private id: number;
  private qty: number;
  private ship_date: string;
  private pet_order_status: Pet_OrderStatus;

  constructor(){
      this.id = 1314;
      this.qty = 1,
      this.ship_date = '2020-05-29',
      this.pet_order_status = Pet_OrderStatus.DELIVERED

  }

  checkOrder(){
    console.log(`Order - ${this.pet_order_status}`)
  }
}

const order = new Pet_Order()
order.checkOrder(); 
 
 