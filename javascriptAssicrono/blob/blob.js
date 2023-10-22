const imagem = fetch('./imagem.jpg');

imagem.then(r => r.blob())
.then(body => {
    const blobUrl = URL.createObjectURL(body);
    const imagemDom = document.querySelector('img');
    imagemDom.src = blobUrl;
    //console.log(blobUrl)
    //console.log(body)
})




/*const div = document.createElement('div');

fetch('./imagem.png')
.then(response => response.blob())
.then(imgBlob => {
    const bloUrl = URL.createObjectURL(imgBlob);
    console.log(bloUrl);
});*/