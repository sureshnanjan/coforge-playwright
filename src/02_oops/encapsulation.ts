/**
 * Encapsulation in object-oriented programming refers to restricting unauthorized access 
 * and mutation of specific properties of an object.
In TypeScript, access modifiers are used to achieve encapsulation.
By default, all class properties in a class are public. This default behavior 
can be overridden by prefixing the properties with access modifiers.
public: This is the default visibility of every class property. 
A public property is accessible outside the class.
private: A property prefixed with the private keyword can’t be accessed anywhere outside the class and cannot be inherited by a subclass.
protected: The protected access modifier is very similar to the private access modifier with one key difference. Properties marked with the protected keyword are visible and can be inherited by a subclass.
In addition to the main three, TypeScript has two more access modifiers:
static: Properties or methods prefixed with static can only be accessed directly on the class and not on an object instantiated from the class. They also can’t be inherited.
readonly: Properties prefixed with readonly can’t be modified; their values can only be read. Since read-only properties cannot be modified, they must be set at the class declaration or inside a constructor function.
 */
namespace Encapsulation{
    class A {  
        static index: number = 1;
    }
}

class InitWithModifier {  
    constructor(public variable: string){}
}
const object_iwm = new InitWithModifier('value')

class GetSet {  
    private _variable: string;  
    constructor(variable:string){    
        this._variable = variable;  
    }  
    get variable(): string {    
        return this._variable;  
    }  
    set variable(value: string) {    
        if(value === '') throw new Error("Variable cannot be an empty string");    
        this._variable = value;  
    }
}
const object_gs = new GetSet('string')
//setting the variable
object_gs.variable = 'different string'
//getting the variable
console.log(object_gs.variable)





