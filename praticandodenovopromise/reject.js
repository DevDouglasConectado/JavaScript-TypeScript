const promessa = new Promise(function(resolve, reject) {
    let condicao = false;
    if(condicao) {
    resolve('Estou pronto!');
    } else {
    reject(Error('Um erro ocorreu.'));
    }
    });
    console.log(promessa); // Promise {<rejected>: Error:...}