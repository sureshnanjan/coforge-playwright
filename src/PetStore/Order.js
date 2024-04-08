"use strict";
class Order {
    constructor() {
        this.id = 67890;
        this.petID = 223;
        this.quantity = 2;
        this.shipDate = "07-04-2024";
        this.complete = true;
    }
}
var Status;
(function (Status) {
    Status[Status["placed"] = 0] = "placed";
    Status[Status["approved"] = 1] = "approved";
    Status[Status["delivered"] = 2] = "delivered";
})(Status || (Status = {}));
