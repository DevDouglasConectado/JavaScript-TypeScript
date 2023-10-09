
/*const promessa = new Promise((resolve, reject)=>{
    let condicao = true;
    if(condicao){
        setTimeout(()=>{
            resolve({nome:'andre',idade:28});
        },1000)
    }else{
        reject(Error('Um erro ocorreu na promise'))
    }
});*/
/*const retorno = promessa.then(resolucao =>{
    console.log(resolucao);
    return 'teste'
}).then(resolucao =>{
    console.log(resolucao)
})*/


/*const retorno = promessa.then(resolucao => 'teste').then(resolucao => {
    console.log(resolucao)
})*/

/*const retorno = promessa
    .then(resolucao =>{
     console.log(resolucao);
     resolucao.profissao = 'designer';
     return resolucao;
})
    .then(resolucao =>{
    console.log(resolucao)
})
.catch(rejeitada =>{
  console.log(rejeitada)
}).finally(()=>{
    console.log('acabou');
})


console.log(retorno);*/

