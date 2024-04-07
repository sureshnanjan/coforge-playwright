function sum(...args:number[]) {
    return args.reduce((previousTotal, current) => {
    return previousTotal + current;
    });
    }

console.log(sum(1,2))   // prints 3
console.log(sum(1,2,3)) // prints 6

function sumfromsperead(param1:number, param2:number, param3:number){
    return param1 + param2 + param3;
}
//const numbers = tuple(1,2,3,)
//console.log(sumfromsperead(...numbers)); // prints 6

