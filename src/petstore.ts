class petstore{
    id: number; 
    name: string; 
    constructor(id: number, name:string){    
        this.id = id;  
        this.name=name;
    }
    pet():void{
        console.log('${this.id}, ${this.name}')
    }
}
const ob = new petstore(1213,'germansheperd')
console.log(ob.pet)

