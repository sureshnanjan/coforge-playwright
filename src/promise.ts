let promise = new Promise(function (resolve, reject) {
    const x = "vamsi";
    const y = "vamsi"
    if (x === y) {
        console.log("Values of x and y are equal")
    } else {
        console.log("Values of x and y are not equal")
    }
});
 
promise.
    then(function () {
        console.log('Success, You are a vamsi');
    }).
    catch(function () {
        console.log('test is failed');
    });