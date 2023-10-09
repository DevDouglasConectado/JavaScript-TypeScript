const login = new Promise(resolve => {
    setTimeout(() => {
    resolve('Login Efetuado');
    }, 1000);
    });
    const dados = new Promise(resolve => {
    setTimeout(() => {
    resolve('Dados Carregados');
    }, 1500);
    });
    const tudoCarregado = Promise.all([login, dados]);

    console.log(tudoCarregado);
    
    tudoCarregado.then((resolucao)=>{
        console.log(resolucao);
    })

    //tudoCarregado.then(respostas => {
    //console.log(respostas); // Array com ambas respostas
    //});
    