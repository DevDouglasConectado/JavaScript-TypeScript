/*const verdadeira = true;
//let tem escopo de bloco {...bloco}
//var só tem escopo de função
let nome = 'luiz';//criando
var nome2 = 'luiz';//criando

if(verdadeira){
    let nome = 'Otavio';//criando
      var nome2 = 'otavio';//redeclarando
   
if(verdadeira){
        let nome = 'varial';//criando
        var nome2 = 'varial';//redeclarando
        console.log(nome,nome2);
     
    }

}
console.log("let : "+ nome,"// var : " + nome2);
*/
const verdadeira = true;
var home = 'casa';
function falaOI(){
    
console.log(home);
    if(verdadeira){
        let nome = 'luiz';
        console.log(nome);
    }
    
}
falaOI();
