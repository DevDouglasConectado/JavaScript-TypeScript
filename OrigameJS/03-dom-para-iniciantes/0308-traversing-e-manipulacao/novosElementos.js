
const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'novo titulo';
novoH1.classList.add('titulo');

console.log(novoH1);

const mapa = document.querySelector('.mapa');

mapa.appendChild(novoH1);
