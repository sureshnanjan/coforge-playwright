/**
 * Examples for Promise with resolve and reject 
 */

const _checkPromise = new Promise(function(pass, fail){
    let x = 'venk5522';
    let y= 'venk1236';
    if(x === y){
        pass(`Both variables values are matching ${x} == ${y}`);
    }else{
        fail(`Both variables values are not matching ${x} !== ${x}`);
    }
    })

    _checkPromise
    .then(function (pass) {

         console.log(pass);
    }, 
    function (fail) {

        console.log(fail);

    });