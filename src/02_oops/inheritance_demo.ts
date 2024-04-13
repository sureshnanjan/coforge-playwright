/**
 * This is a class for Representing Petstore Person
 * 
 */
export class Person {  
    name: string;  
    age: number;  
    constructor(name:string, age:number){    
        this.name = name;    
        this.age = age;  
    }  
    /**
     * This Method will do something and result in some thing
     */
    eat() {    
        console.log(`What's for dinner?`);  
    }  
    speak() {    
        console.log(`My name is ${this.name}, I am ${this.age} years old`);  
    }
}

class Animal {  
    name: string;  
    age: number;  
    constructor(name:string, age:number){    
        this.name = name;    
        this.age = age;  
    }  
    /**
     * This Method will do something and result in some thing
     */
    eat() {    
        console.log(`What's for dinner?`);  
    }  
    speak() {    
        console.log(`My name is ${this.name}, I am ${this.age} years old`);  
    }
}

class Chef extends Person {  
    occupation: string;  
    constructor(name:string, age:number, occupation: string){    
        super(name, age)    
        this.occupation = occupation;  
    }    
    speak(): void {    
        console.log(`I am a ${this.occupation}`);  
    }  
    
    cook() {    
        console.log(`I am cooking`);  
    }
}

var aperson:Person = new Person("Suresh", 48);
var achef:Chef = new Chef("Ashok",20,"Cook");
var someTiger: Animal = new Animal("Tiger", 25);

var somethins = {
name:"TestUser", 
age:40,
occupation:"Drivre",
speak: () =>{ },
eat: ()=>{}
}
aperson = someTiger;

console.log(aperson.name);

class NewClass implements Person{
    name: string;
    age: number;
    constructor(){
        this.name = "";
        this.age = 35;
    }
    eat(): void {
        console.log("A diffrent way of Eating");
    }
    speak(): void {
        console.log("A different way of speaking");
    }
    newBehavior(): void{
        console.log("This is new in New Class")
    }
}

