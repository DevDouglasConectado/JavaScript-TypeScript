const login = new Promise(resolve => {
    setTimeout (() => {
        resolve('login Efetuado');
    },1000);
});

const dados = new Promise(resolve => {
    setTimeout(() => {
        resolve('Dados Carregados');
    },1500);
});
const tudoCarregado = Promise.all([login,dados]);

tudoCarregado.then(respostas => {
    console.log(respostas);
})