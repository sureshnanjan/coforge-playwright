class PolymorphicA {  
    name: string = "Class A"  
    print(){    
        console.log('I am class A')  
    }
    /*
    static polymorphism is not supported
    print(a:string):string{
        return "string and print";
    }
    */
}

class PolymorphicAB extends PolymorphicA {  
    name: string = "Class B"  
    print(){    
        console.log('I am class B')  
    }
}