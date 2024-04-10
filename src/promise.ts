
let promise = new Promise(function (_resolve, _reject) {
    const x = "dhara";
    const y = "dhara"
    if (x === y) {
        console.log("Values of x and y are equal")
    } else {
        console.log("Values of x and y are not equal")
    }
});
 
promise.
    then(function () {
        console.log('Success, You are a dhara');
    }).
    catch(function () {
        console.log('test is failed');
    });