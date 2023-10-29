const div = document.createElement('div')

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
    console.log(response.type, response.url);
})