const imgs = document.querySelectorAll('img');

 function handleImg(event){
    console.log(event.target);
    console.log("-------------------------")
    console.log(event.currentTarget.getAttribute('src'));
 }
imgs.forEach((img) => {
    img.addEventListener('click',handleImg);
   console.log(img);
});
