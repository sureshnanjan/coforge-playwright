// Synchronous function using setTimeout
function syncWithTimeout() {
    console.log("Start");
    setTimeout(function() {
        console.log("Middle after 1000ms");
    }, 1000);
    setTimeout(function() {
        console.log("End after 2000ms");
    }, 2000);
}

// Calling the synchronous function
console.log("Before function call");
syncWithTimeout();
console.log("After function call");
