const doc = fetch('./doc.txt');
console.log(doc);

/*doc.then(resolucao => {
    console.log(resolucao.text());
})*/
/*doc.then(resolucao => {
    resolucao.text().then((body) => {
        console.log(body)
    })
})*/
/*doc.then(resolucao =>{
    return resolucao.text();
}).then((body) =>{
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
    console.log(body);
})*/
doc
.then(r =>{
    return r.text();
}).then(body =>{
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
   
});