console.log('hello world');
const alunos = ['luiz', 'maria','joao'];
alunos.push('luiza');
alunos.push('fábio');//adiciona no fim 
console.log(alunos);

alunos.unshift('carlos')// adiciona no começo
console.log(alunos);

removido = alunos.pop();//remove na utima 
console.log(removido);
console.log(alunos);

removido = alunos.shift();//remove na utima 
console.log(removido);
console.log(alunos);

//remove conteudo sem remover os indices
const estudante = ['luis', 'maria', 'joao']
delete estudante[1];
console.log(estudante);
console.log(estudante[1]);
console.log(estudante[50]);

//slice
const univesitario = ['luis', 'maria', 'joao']
univesitario.push('luiza');
univesitario.push('Eduardo');
console.log(univesitario.slice(0,4));

const univesitario2 = ['luis', 'maria', 'joao']
univesitario2.push('luiza');
univesitario2.push('Eduardo');
console.log(univesitario2.slice(0,-1));

console.log(typeof univesitario2);



