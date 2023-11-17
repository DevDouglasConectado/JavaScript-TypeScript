// utilizando a API https://viacep.com.br/ws/${CEP}/json/
//crie um formulário onde o usuário pode digitar o CEP
//e o endereço completo é retornado ao clicar em buscar
 
//entrada
const inputCep = document.getElementById('cep');
//botão
const btnCep = document.getElementById('btncep');
//div
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click',handleClick);

function handleClick(event){
    event.preventDefault();
    const cep = inputCep.value
    buscaCep(cep);
}

function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body => {
      resultadoCep.innerText = body;
    })
  }
