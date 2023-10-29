const div = document.createElement('div')

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
    response.headers.forEach(console.log);
})