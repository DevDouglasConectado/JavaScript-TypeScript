const sobre = fetch('./sobre.html');

const div = document.createElement('div')

sobre.then (r => r.text())
.then(body => {
   // console.log(body);
    div.innerHTML = body;
    console.log(div);

    const titulo = div.querySelector('h1')
    console.log(titulo);
});