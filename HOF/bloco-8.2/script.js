const { element } = require("prop-types");

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui -> chame as caalback para apresentar os emails
const resultado = emailListInData.forEach(showEmailList);

// Exemplo utilizando find 

const numbers = [19, 21, 45, 3, 30, 22, 15];

// primeiro numero do array divido por 3 e 5
const findDivisibleBy3And5 = (number) => number.find(element => element % 3 === 0 && element % 5 === 0);

console.log(findDivisibleBy3And5(numbers));

// encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.find(element => element.length === 5);

console.log(findNameWithFiveLetters(names));

// encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
// element => element.id é a condição que o find precisa atender para encontrar o elemento
const findMusic = (id) =>  musicas.find(element => element.id === id).title;

console.log(findMusic('31031685'));

// Exercicios com Some e Every
// retorne true se ele estiver contido e caso contrário, retorne false, use some;
const names12 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some(element => element===name);

console.log(hasName(names12, 'Ana'));

// se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.some(element => element >= minimumAge);

console.log(verifyAges(people, 18));