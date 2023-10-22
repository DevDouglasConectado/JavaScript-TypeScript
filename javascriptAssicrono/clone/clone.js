const imagem = fetch('https://viacep.com.br/ws/01001000/json/');

imagem.then(r => {
    const r2 = r.clone();
    r.text().then((text) => {
        console.log(text);
    })
    r2.json().then((json)=>{
        console.log(json);
    })
    console.log(r);
}).then(body => {
    console.log(body);
})
