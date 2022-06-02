// 1 -  Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos.
// O código deve retornar em sequência 2, 15 e 54.

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
// Passando os parametros para as funções a partir do spread operator
const rectangles = [...rectangle1, ...rectangle2, ...rectangle3];

// não preciso passar retorno
rectangles.forEach((rectangle) => {
  rectangleArea() // altere a chamada da funcao rectangleArea
  // console.log(rectangle[0] * rectangle[1]);
});

// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// parametro rest -> posso passar um número variável de parametros
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0)

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(9, 12, 28, 55, 5));

// 4 - Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa, 
// retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
// object destructuring
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
};

// desestruturando um objeto
// const { name, age, likes, nationality = 'brazil' } = gunnar;

// const personLikes = (...args) => `${name} is ${age} years old and likes ${likes.join(', ')} from ${nationality}.`;

// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, 
// retorna todas as pessoas australianas que nasceram no século 20:
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];
// desestruturando um objeto
const { name, bornIn, nationality } = people; 

const filterPeople = (arr) => {
  return arr.filter(({ name, bornIn }) => {
    const birday = new Date().getFullYear() - bornIn;
    // console.log(birday);
    // Range de Idade para nascidos nos anos 90 - 121 anos e 22 anos
    if(birday > 21 && birday <= 121){
      return name;
    }
  });
}

console.log(filterPeople(people));