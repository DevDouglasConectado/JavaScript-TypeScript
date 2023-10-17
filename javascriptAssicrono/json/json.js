const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then(r => r.json())
.then(body => {
    console.log(body.bairro);
    console.log(body.logradouro);
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body.logradouro;
   
})