const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('Resolvida');
    }, 1000);
    });
    promessa.then(resolucao => {
    console.log(resolucao); // 'Resolvida' após 1s
    });