class Car {
    // Access Modifiers
    private model:string; 
    //private bolts: number; 
    // public private protected
    year:number;  
    price:string; 
    //color : string;

    // Color , Make , Fuel, Safety , Seaters, Servicing Bill
        constructor(){
        this.model = "Ford";
        this.year = 2024;
        this.price = "Value$";
    } 
    drive() {    
        console.log('The Car has Started driving');  
    }  
    stop() {    
        console.log('The car has stopped');  
    }
}

Car

class Television{
    model:string;  
    year:number;  
    price:string; 
    //color : string;

    // Color , Make , Fuel, Safety , Seaters, Servicing Bill
        constructor(){
        this.model = "Samsung";
        this.year = 2024;
        this.price = "Value$";
    } 
    drive() {    
        console.log('The Show has started');  
    }  
    stop() {    
        console.log('The show has ended');  
    }
    change(){
        console.log("The channel has changed");
    }



}

interface CanFly{}
interface CanSwin{}

enum Models{
    sports,
    sedan
}

class Fish{
    public static TotalFishes:number;
    public size:number;
    public color: Colors;
    private age:number;

    constructor(){
        this.age = 15;
        this.color = Colors.gold
        this.size = 10;
        Fish.TotalFishes += 1;

    }
}
const angelfish = new Fish();
const other = new Fish();

enum Colors{
    gold =100,
    silver,
    black
}
class Reptile{}
class Dog{}
class Cat{}
class Bird{}

const tesla = new Car();

type SomeTHing = string | Car | CanFly;

type Pet = Fish | Dog | Reptile | Cat| Bird | number | "Test"
var myPet: Pet = "Test"
myPet = "NOT"

var instSMT:SomeTHing = "";
instSMT = tesla ;




const ford = new Car();
const somethingLikeACar = {
    model:"Skoda",
    price:"someIndianRS",
    year:2024,
    mileage:"200",
    other: "somevalue",
    drive:()=>{},
    stop:()=>{}};
const myTV = new Television();
console.log();
console.table();
// The properties can be accessed and set using the dot (.) Operator.
/**
 * 
 * class SomeTYpe{} Instanceof class, 
 * or a base calss of this class
 * 
 */
// Duck Typing - JS Python - Weakly Typed Languages

function PrintCarDetail(carInstance:Car){
  //  console.log(carInstance.model);
    console.log(carInstance.price);
    console.log(carInstance.drive());


}
/*
tesla.

PrintCarDetail(tesla);
PrintCarDetail(ford);
PrintCarDetail(somethingLikeACar);
PrintCarDetail(myTV);
*/