import { deprecate } from "util";

function log(target:any, key:any, descriptor:any) {
    console.log(`Logging ${key} function`);
    return descriptor;
  }
  
  class Example {
    greet() {
      console.log("Hello, world!");
    }
  }
  
  const example = new Example();
  example.greet();