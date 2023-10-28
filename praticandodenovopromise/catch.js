const promessa = new Promise((resolve,reject)=>{
    let condicao = false;
    if(condicao){
        resolve('Estou pronto');
     }else{
        reject(Error('um erro ocoreu'));
     }
});
promessa.then(resolucao => {
    console.log(resolucao);
}).catch(reject => {
    console.log(reject);
})