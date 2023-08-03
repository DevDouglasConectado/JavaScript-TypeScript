const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
   console.log(event);
  //console.log(this.getAttribute('href'));
  //console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);




//const img = document.querySelector('img');

/*img.addEventListener('click',()=>{
    console.log('clicou');
})*/
//--------------------------------------------------------
/*function callback(){
    console.log('clicou');
}
img.addEventListener('click',callback);*/
//-------------------------------------------------------
/*function callback(event){
    console.log(event);
}
img.addEventListener('click',callback);

animaisLista = document.querySelector('.animais-lista');*/

//------------------------------------------------------
/*animaisLista = document.querySelector('.animais-lista');

function executarCallback(event){
   //const currentTarget = event.currentTarget; // this
   //const target = event.target; // onde o clique ocorreu
   //const type = event.type; // tipo de evento
   const path = event.path;
   //console.log(currentTarget);
   //console.log(target);
   //console.log(type);
   console.log(path);
     
}
animaisLista.addEventListener('click', executarCallback);*/

