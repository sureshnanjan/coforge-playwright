let promise = new Promise (function(resolve,reject){
    const a = "Shwetha";
    const b = "Shwetha";
    if(a != b) {
        console.log("Operation is successful")
    }
    else {
        console.log("Operation has failed")
    }
});

promise.then(function(resolve){
   resolve
}).then(function(reject){
    reject
});