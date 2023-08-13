function handleClickT(event) {
    console.log(event.key);
    if(event.key === 't') {
      document.documentElement.classList.toggle('textomaior');
    }
  }
  
  window.addEventListener('keydown', handleClickT);