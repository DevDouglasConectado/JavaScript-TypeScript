

fetch('https://viacep.com.br/ws/01001000/json')
.then(response => response.json())
.then(cep => {
    console.log(cep);
    console.log(cep.bairro, cep.logradouro);
})