
const listaAnimais = document.querySelector('.animais-lista');
/*
listaAnimais.clientHeight; // height + padding 
listaAnimais.offsetHeight; // height + padding + border 
listaAnimais.scrollHeight; // height total, mesmo dentro de scroll 
*/ 
const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;


console.log("height total, mesmo dentro de scroll");
console.log(height);

console.log(" Distância entre o topo do elemento e o topo da página");
console.log(animaisTop);

console.log("primeiro H2 -  Distância entre o canto esquerdo do elemento e o canto esquerdo da página ");
const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;
console.log(h2left);

console.log("Método que retorna um objeto com valores de width, height,distâncias do elemento e mais.")
const rect = primeiroh2.getBoundingClientRect();
console.log(rect.height);
console.log(rect.top);
console.log(rect.left);

console.log("windons");
console.log(" width do janela")
console.log(window.innerWidth); 
console.log("soma dev tools também ")
console.log(window.outerWidth,);  
console.log("height do janela ")
console.log(window.innerHeight,); 
console.log("soma a barra de endereço ")
console.log(window.outerWidth,);

console.log("distância total do scroll horizontal ");
console.log(window.pageYOffset);

console.log("distância total do scroll vertical ");
console.log(window.pageXOffset);

/*const h2rect = primeiroh2.getBoundingClientRect();
console.log(h2rect.top);
if(h2rect.top<0){
    console.log("paso do elemento");
}
 */
const small = window.matchMedia('(max-with: 600px').matches;
if(small){
    console.log('usuario-mobile');
}else{
    console.log('usuario desktop');
}