function init() {
    var name = "Some Value"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(`Accessing outer function value : ${name}`); // use variable declared in the parent function
    }
    displayName();
  }
  init();

  function initWithParams(paramfromCall:string) {
    var outerVal = "Some Value";
    function innerFunction(){
        console.log(`Accessing the outer function params ${paramfromCall}`)
        console.log(`Accessing outer function provided values ${outerVal}`)
    }

    innerFunction();
  }
  initWithParams("suresh");

  function makeAdder(adderVal: number){

    function getAdder(param:number) {
        return adderVal + param;
    }

    return getAdder;
  }
  
  const tens_adder = makeAdder(10);
  const hundreds_adder = makeAdder(100);

    
  console.log(tens_adder(20))
  console.log(hundreds_adder(200))

  function simpleDecorator(target: any, decorated: any, decorator: any) {
    console.log(`Doing some Pre Processing on:  ${decorated} its type is ${typeof(decorated)}`);
    console.log(`This is the target:  ${target} its type is ${typeof(target)}`);
    return decorator
    //console.log(`Doing some Pre Processing on:  ${decorated} its type is ${typeof(decorated)}`);
    
  }

 function decorateFunction(fnarg:any){
  console.log("PREPROCESSING .....")
  fnarg();
  console.log("POST PROCESSING ......")
 }

function simple_function() {
  const insidevar = 100;
    console.log("I am a simple function")
    console.log(insidevar)
}

//simple_function();
//console.log(insidevar)

decorateFunction(simple_function)
