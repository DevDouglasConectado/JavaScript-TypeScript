const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
   //console.log(event);
   console.log(this);
    console.log(event.currentTarget);
    console.log(this.getAttribute('href'));
 
}

linkExterno.addEventListener('click', handleLinkExterno);
