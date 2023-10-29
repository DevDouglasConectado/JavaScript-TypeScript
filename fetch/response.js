fetch('./arquivo.txt').then(function(response){
    return response.text();
}).then(function(corpo){
    console.log(corpo);
})