let promise = new Promise(function (resolve, reject) {
    const x = "ramya";
    const y = "ramya"
    if (x === y) {
        console.log("Values of x and y are equal")
    } else {
        console.log("Values of x and y are not equal")
    }
});
 
promise.
    then(function () {
        console.log('Success, You are ramya');
    }).
    catch(function () {
        console.log('test is failed');
    });