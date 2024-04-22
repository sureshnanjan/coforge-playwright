//const varFunc = simpleFunction;
function long_running(){
    setTimeout(()=>{
        console.log("This is first Opertaion")
        setTimeout(()=>{
            console.log("This is the inner op 1")
            setTimeout(()=>{
                console.log("This is the inner inner op 1") 
            },500)

        },5000)
    },5000)
}

function simpleFunction(){
    console.log("Inside Simple Function");
}
console.log("Satrte");
long_running()
console.log("Ended")

// I have a network request
// I have to change to PDF
// Write to Disk

var timeNow = Date.now();
setInterval(()=>{
    let now = Date.now();
    console.log((now - timeNow)/1000)
    timeNow = now
},5000)


