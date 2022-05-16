// Exemplo de exercicio de fixação
const funcaoAcorda = () => 'Acordando';
const funcaoCafe = () => 'Bora tomar café';
const funcaoDormir = () => 'Partiu Dormir!';

// Função tem que receber o retorno das funções acima
const doingThing = (callback) => {
  const output = callback();
  return output;
}

console.log(doingThing(funcaoDormir));

// Exercicio 01 --> retorne um objeto no formato { nomeCompleto, email }
// função para retornar o nome e email 
const obj = (name) => {
  const nome = name.replace(/ /g, '_');
  const email = `${nome}@trybe.com`;
  const obj_callback = {};
  obj_callback.nome = name;
  obj_callback.email = email.toLowerCase();
  return obj_callback;
}
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};


console.log(newEmployees(obj));

// exercicio 2 -> Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// Sorteia números aleatórios entre 1 e 5
const numberAleatorio = () => Math.floor(Math.random() * (5) + 1);

// // função que checa se a aposta é igual a sorteado
const check = (callback, aposta) => callback() === aposta ? 'Parabéns você ganhou' : 'Tente novamente!';

console.log(check(numberAleatorio, 1));

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