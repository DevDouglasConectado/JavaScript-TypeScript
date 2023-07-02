// atribuição via destruturação

let a = 'A';
let b = 'B';
let c = 'C';
//[a,b,c] = [1,2,3];

/*const numeros = [1,2,3];
[a,b,c] = numeros;*/

/*const letras = [b,c,a];
[a,b,c]=letras;

console.log(a,b,c);*/
// ...rest , ...spred
const numeros = [ [1,2,3], [4,5,6],[7,8,9]];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);