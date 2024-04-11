/**
 * 
 * Details of customer class uses to store petdetails along with common members from  class
 *
 */
 

class usersDetails {
    id: number;
    username: string; 
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: number;

    
    

    constructor(id: number, username: string, lastName: string, email: string, password: string, phone: string, userStatus: number)
    
    {
        this.id = id;
        this.username = username;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.userStatus = userStatus;
    }

    details() 
    
    {
        console.log(this.id);
        console.log(this.username);
        console.log(this.lastName);
        console.log(this.email);
        console.log(this.password);
        console.log(this.phone);
        console.log(this.userStatus);
    }

}

const usersInfo = new usersDetails(10, 'amojes93', 'mojes', 'amudapakumojes93@gmail.com', 'moji@01', '8500028008', 3);
usersInfo.details();