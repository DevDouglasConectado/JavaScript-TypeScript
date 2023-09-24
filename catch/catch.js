const promessa = new Promise((resolve, reject)=>{
    let condicao = false;
    if(condicao){
        resolve('estou pronto');
    }else{
        
        reject(Error('um erro ocorreuuuu'));
    }

});
promessa.then(resolucao=> {
    console.log(resolucao);
}).catch(reject => {
    console.log('um erro aconteceu...');
    console.log(reject);
})

