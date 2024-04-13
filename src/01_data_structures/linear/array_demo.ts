// Array of numbers
let oddNumbers: number[] = [1, 3, 5, 7, 9]; 

// Array of strings
let cities: string[] = ["Amsterdam", "London", "Istanbul"];

// Generic array type
let names: Array<string> = ["Hermione", "Ron", "Harry"];

// Mixed typed array
let mixedArray: (string | number)[] = ["Dumbledore", 3, "Severus Snape", 7];

// Access the first element
let firstNumber: number = oddNumbers[0]; 

// Access the second element
let secondCity: string = cities[1]; 
cities[0] = "Edinburgh"; // Change the first element to "Edinburgh"

//A tuple is a specific type of array where the order of elements has a fixed relationship:
const value:[string,number,string] = ["",10,""] 
