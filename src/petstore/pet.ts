class Pet{
    id:number;
    category: Category;
    name:string;
    photoUrls: string;
    tags: Tag;
    status: Status

    constructor(){
        this.id = 0;
        this.category = new Category();
        this.name = "";
        this.photoUrls = "";
        this.tags = new Tag();
        this.status = Status.approved;
    }
}

