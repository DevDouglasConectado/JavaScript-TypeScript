const promesa = new Promise((resolve, reject)=>{
    let condicao = true;
    if(condicao){
        resolve('estou pronto');
    }else{
        reject(Error('um erro ocorrou'));
    }
});

promesa.then(resolucao =>{
    console.log(resolucao);
}, reject => {
    console.log(reject);
}).finally(()=>{
    console.log('ocorreu')
})

