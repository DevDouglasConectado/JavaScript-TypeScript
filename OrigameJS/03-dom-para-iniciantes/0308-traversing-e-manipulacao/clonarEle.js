
/*const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;

// titulo, titulo2 e novo titulo são inguais 

const cloneTitulo = titulo.cloneNode(true);
const contato = document.querySelector('.contato');
contato.appendChild(cloneTitulo);*/

const h1 = document.querySelector('h1');
const  faq = document.querySelector('.faq');
//faq.appendChild(h1); // so movi não clonei

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');

faq.appendChild(cloneH1);