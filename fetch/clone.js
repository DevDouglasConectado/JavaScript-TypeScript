const div = document.createElement('div');

fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => {
    const cloneResponse = response.clone();
    response.json().then(json => {
        console.log(json)
    });
    cloneResponse.text().then(text => {
        console.log(text);
    })
})