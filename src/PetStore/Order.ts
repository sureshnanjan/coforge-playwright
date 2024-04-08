class Order{
    id:number;
    petID:number;
    quantity:number;
    shipDate:String;
    complete:boolean;


    constructor(){
        this.id=67890;
        this.petID=223;
        this.quantity=2;
        this.shipDate="07-04-2024";
        this.complete=true;
    }

    }

    enum Status{
        placed,
        approved,
        delivered
    }  



