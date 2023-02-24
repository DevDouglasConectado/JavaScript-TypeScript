/*
&& -> false && true -> false "o valor mesmo"
FALSY
false
0
' '  " " ```
null / undefined
NaN
*/ 
console.log('luiz' && undefined && 'Maria');
console.log('luiz' && '' && 'Maria');
console.log('luiz' && NaN && 'Maria');

function falaOi(){
    return 'oi';
}
let vaiExecutar = false;

console.log(vaiExecutar && falaOi());

/**************************** */

let vaiExecutar2 = null;

console.log(vaiExecutar2 && falaOi());
/**************************** */

let vaiExecutar3 = 'joazinho';

console.log(vaiExecutar3 && falaOi());
/**|| -> true && false -> vai retornar verdadeiro 
 * exibe qualquer um deles, vai retorna. verdadeiro
 * 
*/
console.log("-----------||---------------")
console.log(0 || false || null || 'luiz otávio' || true);

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'string';
const d = false;
const e= NaN;
console.log(a || b || c || d || e);

const a1 = 0;
const b1 = null;
const c1 = false;
const d1 = false;
const e1= NaN;
console.log(a1 || b1 || 'joazinho' || d1 || e1);



