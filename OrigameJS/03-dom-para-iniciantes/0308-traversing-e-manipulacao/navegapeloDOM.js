const lista = document.querySelector('.animais-lista');

console.log('*********pai*************');
console.log(lista.parentElement ); // pai

console.log('*********pai do pai*************');
console.log(lista.parentElement.parentElement);// pai do pai

console.log('**********elemento acima************');
console.log(lista.previousElementSibling)// elemento acima

console.log('**********elemento abaixo************');
console.log(lista.nextElementSibling);

console.log('**********HTMLCollection com os filhos************');
console.log(lista.children);

console.log('**********primeiro filho************');
console.log(lista.children[0]);

console.log('**********último filho************');
console.log(lista.children[--lista.children.length]);


console.log('**********------------************');
console.log(lista.parentElement);
console.log(lista.parentElement.parentElement);
console.log(lista.parentElement.parentElement.parentElement);
console.log(lista.parentElement.parentElement.parentElement.parentElement );

console.log('**********todas as LI´s************');
console.log(lista.querySelectorAll('li'));
console.log('**********último filho************');
console.log(lista.querySelector('li:last-child'));




















