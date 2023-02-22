function saudacao(nome){
    console.log(`Bom dia ${nome}`);
}

saudacao(`luiz`);
saudacao(`maria`);
saudacao(`joao`);

console.log("----------------");

function saudacao(nome){
    console.log(`Bom dia ${nome}`);
}

const variavel = saudacao(`java`);
console.log(variavel);

console.log("----------------");

function saudacao2(nome){
    return ` Bom dia ${nome}`;
}
const retorno = saudacao2(`HTML`);
console.log(retorno);

console.log("----------------");

const raiz = function (n){
    return n ** 0.5;}

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

console.log("------arrow funcion----------");

const raiz2 = n => n ** 0.5;

console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));

console.log("----------------");

const raiz3 =  (n) =>{
    return n ** 0.5;}

console.log(raiz3(9));
console.log(raiz3(16));
console.log(raiz3(25));
