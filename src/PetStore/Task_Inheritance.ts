/**
 * Category uses to define a common values from Pet
 *
 */
export class Category {
    id: number;
    name: string;

    /**
     * 
     * @param id 
     * @param name 
     */
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    /**
     * 
     * @returns category Id and Name of the pet
     */
    petCategory(): string {
        return `Pet Category ID: ${this.id}, name: ${this.name}`;
    }
}

/**
 * Pet Details class uses to store petdetails along with common members from Category class
 *
 */
export class PetDetails extends Category {
    petId: number;
    name: string;
    photoUrls: string[];
    tags: any[];  
    status: string;

    /**
     * 
     * @param id 
     * @param category 
     * @param name 
     * @param photoUrls 
     * @param tags 
     * @param status 
     */

    constructor(id: number, category: Category, name: string, photoUrls: string[], tags: any[], status: string) {
        super(category.id, category.name);
        this.petId = id;
        this.name = name;
        this.photoUrls = photoUrls;
        this.tags = tags;
        this.status = status;
    }

    getPetDetails(): string {
        return `Pet ID: ${this.petId}, Name: ${this.name}}`;
    }
}