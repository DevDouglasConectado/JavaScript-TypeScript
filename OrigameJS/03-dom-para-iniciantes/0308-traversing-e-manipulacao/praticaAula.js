
const h1 = document.querySelector('h1');

const animaisLista = document.querySelector('.animais-descricao');
h1.innerHTML;
h1.innerHTML = '<p>Novo titulo </p>';
h1.outerHTML = '<p>Novo titulo </p>';

console.log(h1.innerHTML);
console.log(h1.outerHTML);



console.log(animaisLista.innerHTML);
console.log(animaisLista.innerText);