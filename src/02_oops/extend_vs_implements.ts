// Extends vs Implements
class Human {  
    name: string;  
    gender: string;  
    constructor(name:string, gender:string){    
        this.name = name;    
        this.gender = gender;  
    }  
    speak() {    
        return `I am speaking`;  
    }
}

type MyString = string;
type MyNumber = number;
// class MyString

class HumanReplica{
    name:string;
    gender:string;
    constructor(str1:string, str2:string){
        this.name = str1;
        this.gender = str2;
    }
    speak(){
        console.log("This is a look alike");
    }
}

class Doctor implements Human , Flyable{  
    name: string;  
    gender: string;  
    constructor(name:string, gender:string){    
        this.name = name;    
        this.gender = gender;  
    }  
    fly(): void {
        throw new Error("Method not implemented.");
    }
    speak() {    
        return 'I am a doctor';  
    }
}

function DuckTypeFunction(arg1:Human){
    console.log(`{arg1.name} is {arg1.gender}`);
}

interface Flyable{
    name:string,
    fly():void;
}

const myReference:Flyable = new Doctor("suresh","male")

//const docRef:Doctor = myReference;
// WebDriver _driver = new ChromeDriver();

// (TakeScreenShot)




const humar_var = new Human("Kumar","Male")
const doctor_var = new Doctor("Radha", "Female");
DuckTypeFunction(humar_var);
DuckTypeFunction(doctor_var);
DuckTypeFunction({name:"suresh", 
                  gender:"male",
                  speak: () => "Object Speaks",
                 }
                )