const div = document.createElement('div');

fetch('./imagem.jpg')
.then(response => response.blob())
.then(imgBlob => {
    const blobUrl = URL.createObjectURL(imgBlob);
    console.log(blobUrl);
})