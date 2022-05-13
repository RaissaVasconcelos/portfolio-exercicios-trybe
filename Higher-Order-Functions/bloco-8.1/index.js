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