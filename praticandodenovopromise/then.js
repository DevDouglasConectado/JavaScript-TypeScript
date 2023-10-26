const promessa = new Promise(function(resolve, reject) {
    let condicao = true;
    if(condicao) {
    resolve('Estou pronto!');
    } else {
    reject(Error('Um erro ocorreu.'));
    }
    });
    promessa.then(function(resolucao) {
    console.log(resolucao); // 'Estou pronto!'
    });