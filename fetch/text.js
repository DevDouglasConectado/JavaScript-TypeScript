const styleElement = document.createElement('style');

fetch('./style.css')
.then(response => response.text())
.then(style => {
    styleElement.innerHTML = style;
    document.body.appendChild(styleElement);
});