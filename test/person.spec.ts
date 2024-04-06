import { expect } from "chai";
import { Person } from "../src/02_oops/inheritance_demo";

describe("This Module Tests My Petstore ", function testcaseHandler(){
    it('Test name property for Person', () => {
        // Arrange Act Assert
        // Data name , age
        const nameDate = "suresh";
        const ageData = 48;
        const expectedData = "suresh";
        const aut = new Person("suresh",48);
        // Act
        const actual = aut.name;
        expect(actual).equal(expectedData);
    });
    it('Testing with Blank Inputs for Name works', () => {
        // Arrange Act Assert
        // Data name , age
        const nameDate = "";
        const ageData = 48; // Single Responsibility Principle  
        const expectedData = "";
        const aut = new Person(nameDate, ageData);
        // Act
        const actual = aut.name;
        expect(actual).equal(expectedData);
    });
})