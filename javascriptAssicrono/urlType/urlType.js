// imagem = fetch('./docs.txt')
//const imagem = fetch('https://viacep.com.br/ws/01001000/json/')
const imagem = fetch('https://www.google.com')
/*basic:requisisão do propio site
cors:requisisão do site servdor externo
*/


imagem.then(response => {
    console.log(response.type);//url
    if(response.status === 404){
        console.log('pagina não existe')
    }
});


/*const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
    console.log(response.type, response.url);
})*/