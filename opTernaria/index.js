// ? :
 const pontuaUsuario =100;
 const nivelUsuario = pontuaUsuario >= 1000 ? 'Usuário VIP ' : 'Usuario normal';

 //const corUsuario = null;
 const corUsuario = 'pink';
 const corPadrao = corUsuario || 'Preta';

 console.log(nivelUsuario,corPadrao);