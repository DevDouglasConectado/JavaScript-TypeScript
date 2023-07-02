// Palavra para adivinhar
let palavra = "javascript";

// Número máximo de tentativas
let maxTentativas = 6;

// Letras erradas já tentadas
let letrasErradas = [];

// Letras corretas já adivinhadas
let letrasCorretas = [];

// Mostra o estado atual da palavra
function mostraPalavra() {
  let display = '';
  for (let i = 0; i < palavra.length; i++) {
    if (letrasCorretas.includes(palavra[i])) {
      display += palavra[i] + ' ';
    } else {
      display += '_ ';
    }
  }
  console.log(display);
}

// Mostra as letras erradas já tentadas
function mostraLetrasErradas() {
  console.log(`Letras erradas: ${letrasErradas.join(', ')}`);
}

// Mostra o número de tentativas restantes
function mostraTentativas() {
  console.log(`Tentativas restantes: ${maxTentativas - letrasErradas.length}`);
}

// Checa se a letra é uma letra válida
function checaLetra(letra) {
  if (!letra.match(/[a-z]/i)) {
    console.log('Por favor, insira apenas letras.');
    return false;
  } else if (letrasErradas.includes(letra) || letrasCorretas.includes(letra)) {
    console.log('Você já tentou essa letra antes.');
    return false;
  } else {
    return true;
  }
}

// Checa se o jogador ganhou o jogo
function checaVitoria() {
  for (let i = 0; i < palavra.length; i++) {
    if (!letrasCorretas.includes(palavra[i])) {
      return false;
    }
  }
  return true;
}

// Checa se o jogador perdeu o jogo
function checaDerrota() {
  return letrasErradas.length >= maxTentativas;
}

// Inicia o jogo
function iniciaJogo() {
  console.log('Bem-vindo ao jogo de forca!');
  console.log('Adivinhe a palavra: ');
  mostraPalavra();
  while (!checaVitoria() && !checaDerrota()) {
    let letra = prompt('Digite uma letra: ').toLowerCase();
    if (checaLetra(letra)) {
      if (palavra.includes(letra)) {
        letrasCorretas.push(letra);
      } else {
        letrasErradas.push(letra);
      }
      mostraPalavra();
      mostraLetrasErradas();
      mostraTentativas();
    }
  }
  if (checaVitoria()) {
    console.log('Parabéns! Você ganhou!');
  } else {
    console.log('Você perdeu! A palavra era ' + palavra);
  }
}

// Chama a função para iniciar o jogo
iniciaJogo();