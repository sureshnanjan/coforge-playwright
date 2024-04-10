let promise = new Promise(function (resolve, reject) {
	const x = "ram";
	const y = "ram"
	if (x === y) {
        
		console.log("Values of x and y are equal")
	} else {
		console.log("Values of x and y are not equal")
	}
});

promise.
	then(function (resolve) {
		console.log('Success, You are a ram');
	}).
	catch(function (reject) {
		console.log('test is failed');
	});
