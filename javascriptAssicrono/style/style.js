/*const styleElement = document.createElement('./style');*/

/*fetch('./style.css')
.then(response => response.text())
.then(style => {
    styleElement.innerHTML = style;
    document.body.appendChild(styleElement);
});*/
const cep = fetch('./style.css');

cep.then(r => r.text())
.then(body => {
    const conteudo = document.querySelector('.conteudo');
    const style = document.createElement('style');
    style.innerHTML = body;
    conteudo.appendChild(style);
})