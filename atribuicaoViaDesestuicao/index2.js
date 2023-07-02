const pessoa ={
    nome:'Luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco:{
        rua: 'av Brasil',
        numero: 320
    }
};
//atribuição via desestruturação
/*const {nome, sobrenome} = pessoa;
console.log(nome, sobrenome);*/

const{nome, sobrenome, ... resto} = pessoa;
console.log(nome, resto);