// Mostre no console cada parágrado do site
console.log("// Mostre no console cada parágrado do site");
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});
console.log("// Mostre o texto dos parágrafos no console");
// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});
console.log("// Como corrigir os erros abaixo:");

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

console.log(i);

console.log("************************************");


