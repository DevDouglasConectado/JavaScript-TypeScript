
const imagem = fetch('https://viacep.com.br/ws/01001000/json/');
imagem.then(response => {
   console.log(response);
response.headers.forEach(console.log)
});

//const array = ['item 1','item 2']
//array.forEach(console.log);




/*const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
    response.headers.forEach(console.log);
})*/