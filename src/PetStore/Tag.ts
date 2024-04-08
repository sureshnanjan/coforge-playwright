class Tag{

    id:number;
    name:String;

    constructor(){
        this.id=123456;
        this.name="Testuser";
    }

}

const tag = new Tag();
console.log(tag.id)
console.log(tag.name)