/* Exercicio 3 -> Quando a resposta for correta a contagem sobe 1 ponto, 
quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") 
não altera-se a contagem.*/
// minha primeira versão

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// versão depois de olhar o gabarito da trybe
const newCheckProva = (gabarito, respostas) => {
  // Se a resposta for igual ao acerto soma-se 1 ponto
  if (respostas === gabarito) {
    // console.log('Acertou');
    return 1;
  } if (respostas !== gabarito && respostas !== 'N.A') {
    // Se a resposta for diferente do gabarito e diferente de nada, resposta errada
    // console.log('Errou');
    return -0.5;
  }
  // console.log('Sem resposta');
  return 0;
};

// console.log(checkProva(RIGHT_ANSWERS, STUDENT_ANSWERS));

const verificaGabarito = (gabarito, respostas, executa) => {
  let acumula = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    const resultado = executa(gabarito[index], respostas[index]);
    // console.log(resultado);
    acumula += resultado;
  }
  return `Saída: ${acumula}`;
};
console.log(verificaGabarito(RIGHT_ANSWERS, STUDENT_ANSWERS, newCheckProva)); 
