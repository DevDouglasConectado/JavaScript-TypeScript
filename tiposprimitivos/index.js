/*
primitivos (imutáveis) - string, number, boolean, undefined,
null, (bigint, symbol, - valores copiados)

Referencia (mutável) - array, object, funtion, - Passados por referencia
*/

let z = "A";
let y = z;
console.log(z,y);

z = 'outra coisa';
console.log(z,y);


let a = [1,2,3];
let b = a;
let c = b;
console.log(a,b);

a.push(4);
console.log(a,b);

b.pop();
console.log(a,b);

a.push('luiz');
console.log(c);