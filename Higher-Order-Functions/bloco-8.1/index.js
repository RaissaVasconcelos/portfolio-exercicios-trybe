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

console.log(numberAleatorio());
console.log(check(numberAleatorio, 1));