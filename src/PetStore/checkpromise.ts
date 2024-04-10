/**
 * Examples for Promise with resolve and reject 
 */

const _checkPromise = new Promise(function(pass, fail){
    let a = 'venk5522';
    let b= 'venk1236';
    if(a === b){
        pass(`Both variables values are matching ${a} == ${b}`)
    }else{
        fail(`Both variables values are not matching ${a} !== ${b}`)
    }
    })

    _checkPromise
    .then(function (pass) {

         console.log(pass);
    }, 
    function (fail) {

        console.log(fail);

    });