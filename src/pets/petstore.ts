
export class fishtypes{
    id:number;
    name:string;
    color:string;


    constructor(id:number,name:string,color:string){
        this.id=111;
        this.name="angel";
        this.color="orange";
    }
    swim()
    {
        console.log(`my fish is  ${this.name}, my id is  ${this.id}`)
    }
    breath()
    {
        console.log("Fish able to breath in water")
    }

}

class goldfish extends fishtypes{
        age:number;
        size:number;
        constructor(id:number,name:string,color:string){
            super(id,name,color)
            this.age=20;
            this.size=10;

        }
        goldenfish():void
        {
            console.log("I am ${this.age}")
        }
        dolphinfish()
        {
            console.log("it big in sizde")
        }

}

let Fishtypes:fishtypes=new fishtypes(1111,"angel","orange");
var Goldenfish:goldfish=new goldfish(222,"star","pink");
console.log(Fishtypes.swim());
console.log(Fishtypes.breath());
console.log(Goldenfish.color);
console.log(Goldenfish.goldenfish());


