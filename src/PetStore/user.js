"use strict";
class User {
    constructor() {
        this.id = 45678;
        this.username = "testuser";
        this.firstName = "firstName";
        this.lastName = "lastname";
        this.email = "test@gmail.com";
        this.password = "Test@123";
        this.phone = "45645645";
        this.userStatus = 123;
    }
}
const user = new User();
function PrintUserDetails(userDetails) {
    console.log(user.id);
    console.log(user.username);
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.email);
    console.log(user.password);
    console.log(user.phone);
    console.log(user.userStatus);
}
PrintUserDetails(user);
