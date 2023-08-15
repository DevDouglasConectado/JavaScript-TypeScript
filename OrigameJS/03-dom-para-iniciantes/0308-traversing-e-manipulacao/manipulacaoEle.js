
const animais = document.querySelector('.animais');
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

//lista.appendChild(titulo);
//animais.appendChild(titulo);

//contato.insertBefore(lista, titulo);
//contato.insertBefore(animais, titulo);
//contato.insertBefore(animais, mapa);
//contato.removeChild(titulo);
contato.replaceChildren(lista,titulo);



/*console.log("move lista para a final de contato");
console.log(contato.appendChild(lista));

console.log("insere a lista antes de titulo");
console.log(console.insertBefore(lista,titulo));

console.log("remove titulo de contato");
console.log(console.log.removeChild(titulo));

console.log("substitui titulo por lista");
console.log(console.replaceChild(lista, titulo));*/

