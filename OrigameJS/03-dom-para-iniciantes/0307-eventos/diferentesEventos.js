const h1 = document.querySelector('h1');

function callback(event){
    console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize',callback);
window.addEventListener('keydown',callback);



