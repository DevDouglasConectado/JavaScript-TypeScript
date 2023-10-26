const promessa = new Promise(function(resolve, reject) {
    let condicao = true;
    if(condicao) {
    resolve();
    } else {
    reject();
    }
    });
    console.log(promessa); // Promise {<resolved>: undefined}