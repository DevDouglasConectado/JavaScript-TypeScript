/*const promessa = new Promise(function(resolve, reject){
  let condicao = true;
  if(condicao){
    resolve('Estou pronto promessa ');
  }else{
    reject(Error('Um erro ocorreu'));
  }
});

promessa.then(function(resolucao){
    console.log(resolucao);
})
const promessa2 = new Promise ((resolve, reject) => {
    setInterval(()=>{
        resolve('Resolvida');
    },1000);  
});
promessa2.then(resolucao =>{
    console.log(resolucao);
})
*/
const promessa3 = new Promise((resolve, reject)=>{
    resolve('Etapa1');
});
promessa3.then(resolucao =>{
    console.log(resolucao); //etapa 1
    return 'etapa 2';
}).then(resolucao => {
    console.log(resolucao) //etapa 2
    return 'Etapa 3';
}).then(r => r+4)
.then(r => {
    console.log(r); //etapa 34
})


//console.log(promessa);
