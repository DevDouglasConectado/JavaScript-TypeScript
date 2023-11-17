//utilizando a API https://blockchain.info/ticker
//retorne no DOM o valor de compra da bitcoin and reais.
//atualize este valor a cada 30s
const btcDisplay = document.querySelector('.btc');

function fetchBtc(){
    fetch(`https://blockchain.info/ticker`)
    .then(response => response.json())
    .then(btcJson => {
        btcDisplay.innerText = ('R$: ' + btcJson.BRL.buy).replace('.',',');
        console.log("certo");
    });
}
setInterval(fetchBtc, 500);
fetchBtc();

