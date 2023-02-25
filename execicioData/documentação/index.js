const h1 = document.querySelector('.containerr h1');
const data = new Date();

//h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle:'full', timeStyle: 'short'});