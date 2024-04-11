/**
 * Examples for Promise with resolve and reject 
 */

const PromiseCheck = new 
Promise(function(resolve, reject)
{
    let x = 'Rajesh1122';
    let y = 'Rajesh3344';
   
    if ( x==y )
    {
        resolve('Both variables values are matching correctly ${x} == ${y}');
    
    } else
    {

      reject('Both variables values are matching correctly ${x} == ${y}');

     }
    
 });

     PromiseCheck.then(function(passedValue)
{
   console.log(passedValue);
 })
      .catch(function(failedReason)
  
       {
        console.log(failedReason);
      });

