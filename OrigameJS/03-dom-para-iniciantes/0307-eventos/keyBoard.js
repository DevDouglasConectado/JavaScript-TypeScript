function handleKeyboard(event){
    if(event.key === 'a')
        document.body.classList.toggle('azul');
    else (event.key === 'v')
    document.body.classList.toggle('vermelho');
    }


window.addEventListener('keydown',handleKeyboard);