
/**
 * Examples for Promise with resolve and reject OR Pass or fail
 */

const _checkPromise = new Promise(function(pass, fail){
    let a = 'Test123';
    let b= 'Test1234';
    if(a === b){
        pass(`Both variables values are matching ${a} == ${b}`)
    }else{
        fail(`Both variables values are not matching ${a} !== ${b}`)
    }
    })

    _checkPromise
    .then(function (pass) {
         console.log(pass);
    }, function (fail) {
        console.log(fail);
    });
