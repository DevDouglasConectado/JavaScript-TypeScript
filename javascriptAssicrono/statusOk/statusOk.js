//const imagem = fetch ('https://viacep.com.br/ws/01001000/json/');
const imagem = fetch('./docs.txt')

imagem.then(response => {
    console.log(response.status);
    if(response.status === 404){
        console.log('pagina não existe')
    }
});

/*const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
    console.log(response.status, response.ok);
    if(response.status === 400){
        console.log('pagina não encotrada')
    }
});*/