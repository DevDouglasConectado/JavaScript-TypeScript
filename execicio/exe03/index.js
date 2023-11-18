//utilizando a API https://chucknorris.ia/jokes/random
//retorne uma piada randomina do chucknorris, toda vez que
//clicar em próxima

const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function puxarPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(piada =>{
        //console.log(piada.value);
        paragrafoPiada.innerText = piada.value;
    })
}
btnProxima.addEventListener('click',puxarPiada);
//puxarPiada();