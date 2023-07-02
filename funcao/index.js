const souUmDado = function(){
    console.log('Sou um dado');
}
souUmDado();

function executarFuncao(funcao){
    console.log('vou executar sua função abaixo');
    funcao();
}
executarFuncao(souUmDado);
/**************************************************************/ 
const funcaoArrow = () => {
    console.log('sou uma arrow function');
}
funcaoArrow();
/*************************************************************** */ 

const obj = {
    falar: function(){
        console.log('estou falando.....');
    }
};
obj.falar();

const objj = {
    falar(){
        console.log('estou falando.....');
    }
};
objj.falar();