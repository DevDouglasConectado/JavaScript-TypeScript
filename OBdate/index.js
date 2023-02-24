const data0 = new Date();
console.log(data0.toString());

const data1 = new Date(2019,3,20,15,14,27,500);
console.log(data1.toString());

console.log('--------------------');
function zeroEsquerda (num){
    return num >= 10 ? num : `0${num}`;
    
}
function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth());
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

