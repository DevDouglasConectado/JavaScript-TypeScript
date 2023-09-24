const promessa = new Promise((resolve, reject) =>{
    let condicao = false;
    if(condicao){
        setTimeout(()=>{
            resolve({nome:'andre', idade:28});
        },1000);
    }else {
        reject(Error('um erro ocorreu na promise'));
    }
});

 const retorno = promessa.then((resolucao) =>{
    /*console.log(resolucao);*/
    resolucao.profissao = 'Designer';
    return resolucao;
}).then(resolucao => {
    console.log(resolucao)
}).catch(rejeitado => {
    console.log('CATH')
    console.log(rejeitada);
})
console.log(retorno);

/*const promesa = new Promise(function(resolve){
    resolve();
});
console.log(promesa);*/
