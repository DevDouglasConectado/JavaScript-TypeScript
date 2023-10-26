const promessa = new Promise((resolve, reject) => {
    resolve('Etapa 1');
    });
    promessa.then(resolucao => {
    console.log(resolucao); // 'Etapa 1';
    return 'Etapa 2';
    }).then(resolucao => {
    console.log(resolucao) // 'Etapa 2';
    return 'Etapa 3';
    }).then(r => r + 4)
    .then(r => {
    console.log(r); // Etapa 34
    });