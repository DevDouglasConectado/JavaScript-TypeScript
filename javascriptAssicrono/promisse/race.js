const login = new Promise(resolve => {
    setTimeout(() => {
    resolve('Login Efetuado');
    }, 1000);
    });
    const dados = new Promise(resolve => {
    setTimeout(() => {
    resolve('Dados Carregados');
    },500);
    });
    const tudoCarregado = Promise.race([login, dados]);

    console.log(tudoCarregado);
    
    tudoCarregado.then((resolucao)=>{
        console.log(resolucao);
    })