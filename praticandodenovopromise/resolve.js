const promessa = new Promise(function(resolve, reject) {
    let condicao = true;
    if(condicao) {
    resolve('Estou pronto!');
    } else {
    reject();
    }
    });
    console.log(promessa); // Promise {<resolved>: "Estou pronto!"}