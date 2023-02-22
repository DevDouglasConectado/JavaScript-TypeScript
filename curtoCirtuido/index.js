/*
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


