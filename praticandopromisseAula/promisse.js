/*const promesa = new Promise((resolve,reject) =>{
    let condicao = true;
    if(condicao){
        resolve('estou pronto')
    }else{
        reject(Error('um erro ocorreu'))
    }
});

promesa.then((resolucao) =>{
    console.log(resolucao)
});*/
//************************************************* */
/*const promesa = new Promise((resolve,reject) =>{
    let condicao = true;
    if(condicao){
        setTimeout(() => {
            //resolve('estou pronto') 
            resolve({nome:'andre',idade:28})
        }, 1000);
        
    }else{
        reject(Error('um erro ocorreu'))
    }
});

promesa.then((resolucao) =>{
    console.log(resolucao)
});*/
/********************************************** */
/*const promesa = new Promise((resolve,reject) =>{
    let condicao = false;
    if(condicao){
        setTimeout(() => {
            //resolve('estou pronto') 
            resolve({nome:'andre',idade:28})
        }, 1000);
    }else{
        reject(Error('um erro ocorreu'))
    }
});
const retorno = promesa
.then(resolucao => {
  resolucao.profissao = 'designer';
    return resolucao;
}).then( resolucao => {
    console.log(resolucao)
}, rejeitada =>{
    console.log(rejeitada);
})*//*.catch(rejeitada =>{
    console.log(rejeitada);
})*/

//console.log(promesa);
//console.log(retorno);
/** ******************************/
/*const promesa = new Promise((resolve,reject) =>{
    let condicao = false;
    if(condicao){
        setTimeout(() => {
            //resolve('estou pronto') 
            resolve({nome:'andre',idade:28})
        }, 1000);
    }else{
        reject(Error('um erro ocorreu'))
    }
});
const retorno = promesa
.then(resolucao => {
  resolucao.profissao = 'designer';
    return resolucao;
}).then( resolucao => {
    console.log(resolucao)
}, rejeitada =>{
    console.log(rejeitada);
}).finally(()=>{
    console.log('Acabou')
})
*/

const login = new Promise((resolve)=>{
    setTimeout(()=> {
      resolve('usuario login')  
    },1000)
});

const dados = new Promise((resolve)=>{
    setTimeout(() => {
        resolve('dados carregados')
    }, 1500);
});
//const carregouTudo = Promise.all([login,dados]);
const carregouTudo = Promise.race([login,dados]);

console.log(carregouTudo);

carregouTudo.then((resolucao)=>{
    console.log(resolucao);
})