const imgs = document.querySelectorAll('img');

function handleImg(event){
    console.log(event.target);
    console.log(event.target.getAttribute('src'));
}

imgs.forEach((img) => {
    console.log(img);
    img.addEventListener('click',handleImg);
    
});