const A1=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("success")
},1000);
 })

//  const B1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("success")
//     },1000);
//      })

     A1.then(console.log).catch(console.log)