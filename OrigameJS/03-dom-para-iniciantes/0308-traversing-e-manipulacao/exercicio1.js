// duplique o menu e adiciona ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);