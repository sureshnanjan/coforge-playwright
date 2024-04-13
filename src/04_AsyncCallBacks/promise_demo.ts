const myValue = new Promise((resolve,reject)=>{
    if (true) {
        setTimeout(resolve,5000,"Thsi is a success operation")
     
    }
    else{
        setTimeout(reject,5000,"CRITICAL ERROR")
        //reject({name:"Value error", code:2007})
    }
});
/*
console.log("start")
console.log(myValue)
myValue.
then((a)=>console.log("Second Operation" + a))
.then(()=>console.log("Third Operation"))
.then(()=>console.log("Fourth Operation"))
.catch(()=>console.log("Operation Failes I am Quitting"))
console.log("finish")
*/

async function Handler() {

    const result = await myValue;
    console.log(result);
    
}

Handler()