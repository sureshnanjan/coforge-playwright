import { Category, PetDetails } from "../src/PetStore/pet";
import { expect } from "chai";
 
describe("This Module Tests My Petstore ", function testcaseHandler(){
    it('Get Pet Details', () => {
        const category = new Category(100,'Dogs')
        const pet = new PetDetails(101, category,'DogName', ['www.url.com'], ['tag1'],'TestStatus');
        console.log(pet)
        expect(pet.id).to.equal(100);
        expect(pet.name).to.equal('DogName');
    });
})