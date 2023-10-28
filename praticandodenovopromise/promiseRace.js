const login = new Promise(resolve => {
    setTimeout(()=>{
        resolve('login Efetuado');
    },1000)
});
const dados = new Promise(resolve => {
    setTimeout(() => {
        resolve('dados carregados')
    },1500)
});

const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then(resposta => {
    console.log(resposta);
})