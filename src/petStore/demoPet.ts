class pet{
    name: string;
    age: number;
    status: string;
 
    constructor(name: string, age: number, status: string){
        this.name = name;
        this.age = age;
        this.status = status;
 
    }
    pet(): void{
        console.log('pet ${this.name} ${this.age} ${this.status}');
 
    }
}
const mypet = new pet('Doggie', 2, 'Available');
console.log(mypet.name);
mypet.pet();
 
 

enum color{
    black = 'Black',
    white = 'White',
    blue = 'Blue'
}
 
let PetColor: color = color.black;