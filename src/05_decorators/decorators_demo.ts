class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

class PersonLogged extends Person{
    @loggedMethod
    greet(): void {
        super.greet()
    }

    @loggedMethodEnhanced
    greetMore():void{
        super.greet()
    }
}


function loggedMethod(originalMethod: any, _context: any) {

    function replacementMethod(this: any, ...args: any[]) {
        console.log("LOG: Entering method.")
        const result = originalMethod.call(this, ...args);
        console.log("LOG: Exiting method.")
        return result;
    }

    return replacementMethod;
}

function loggedMethodEnhanced(originalMethod: any, context: ClassMethodDecoratorContext) {
    const methodName = String(context.name);

    function replacementMethod(this: any, ...args: any[]) {
        console.log(`LOG: Entering method '${methodName}'.`)
        const result = originalMethod.call(this, ...args);
        console.log(`LOG: Exiting method '${methodName}'.`)
        return result; //9600841049 mani hada 230 / 
    }

    return replacementMethod;
}

const instancePerson = new Person("Suresh - Just simple");
const enhancedPerson = new PersonLogged("Suresh - Now with More logging")

instancePerson.greet();
enhancedPerson.greet();
enhancedPerson.greetMore();


