class users {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    userStatus: number;

    constructor(id: number, username: string, firstName: string, lastName: string, email: string, password: string, phone: string, userStatus: number) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.userStatus = userStatus;
    }

    details() {
        console.log(this.id);
        console.log(this.username);
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.email);
        console.log(this.password);
        console.log(this.phone);
        console.log(this.userStatus);
    }

}

const usersInfo = new users(10, 'amojes93', 'mojes', 'Amudapaku', 'amudapakumojes93@gmail.com', 'moji@01', '8500028007', 3);
usersInfo.details();