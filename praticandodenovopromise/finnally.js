const promessa = new Promise ((resolve, reject) => {
    let condicao = false;
    if(condicao){
        resolve('estou pronto');
    }else {
        reject(Error('um erro ocorreu'))
    }
});

promessa.then(resolucao => {
    console.log(resolucao);
}, reject => {
    console.log(reject);
}).finally(() => {
    console.log('acabou')
})