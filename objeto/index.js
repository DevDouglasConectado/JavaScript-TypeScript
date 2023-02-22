const array = [1,2,3];
array.push(4);
array[0] = 'luiz';
console.log(array);
//**********não pode retribuir***************** */
/*const array = [1,2,3];
array.push(4);
array[0] = 'outra';
console.log(array);*/
const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'Miranda',
    idade: 25
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

function criaPessoa(nome, sobrenome, idade){
    return { nome,sobrenome,idade
    };
}
const pessoaA = criaPessoa('yyyyy','otavio',25);
const pessoaB = criaPessoa('yyyyy','otavio',40);
const pessoaC = criaPessoa('joana','otavio',55);
const pessoaD = criaPessoa('cris','otavio',88);

console.log(pessoaA.nome,pessoaB.nome);
console.log("*******************");
const comando = {
    nome: 'um',
    sobrenome: ' dois',
    idade:25,
    fala(){
        console.log(`a minha idade atual é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
    }
};
comando.fala();
comando.incrementaIdade();
comando.fala();
comando.incrementaIdade();
comando.fala();
comando.incrementaIdade();


