const div = document.createElement('div');

fetch('./fetchAPI.html')
.then(response => response.text())
.then(htmlBody => {
div.innerHTML = htmlBody;
const titulo = div.querySelector('h1');
document.querySelector('h1').innerText = titulo.innerText;
});