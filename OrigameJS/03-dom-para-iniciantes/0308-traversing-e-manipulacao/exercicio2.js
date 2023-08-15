// Selecione o primeiro dt da dl de faq

const faq = document.querySelector('.faq');
const primeiroDT = faq.querySelector('dt');
const proximoDD = primeiroDT.nextElementSibling;

console.log(proximoDD.remove());