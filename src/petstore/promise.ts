let promise = new Promise(function (resolve, reject) {
    const x = "sam";
    const y = "sam";
    if (x == y) {
        console.log("vaues x and y are equal");
    } else {
        console.log("values x and y are not equal");
    }
});
 
promise.
    then(function () {
        console.log("values x and y are equal");
    }).
    catch(function () {
        console.log("vaues x and y are not equal");
    });