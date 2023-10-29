fetch('c:/files/arquivo.txt')
.then((response)=>{
    return response.text();
})
.then((corpo)=>{
    console.log(corpo)
})