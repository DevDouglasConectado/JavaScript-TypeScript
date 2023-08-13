const todosElementos = document.querySelectorAll('body *');

function handleElemento(event){
 
    event.currentTarget.remove();
}


todosElementos.forEach((elemeto) => {
    elemeto.addEventListener('click', handleElemento);
})