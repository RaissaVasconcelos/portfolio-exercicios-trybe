// Teste com reduce - função que some todos os números pares do array
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// console.log(numbers);

const parNumber = (number) => number % 2 === 0 ? number : 0;
const addNumber = (contador, numero) => contador + numero;

const resultado = (element) => element.filter(parNumber).reduce(addNumber);

// console.log(resultado(numbers));

// Teste da mesma função só usando o reduce 

const tratamentoArray = (acumulador, number) => number % 2 === 0 ? acumulador + number : acumulador;
// Lembrando que o segundo parametro inicializa o acumulador em 0
const resultado2 = (element) => element.reduce(tratamentoArray, 0);

// console.log(resultado2(numbers));
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
// 1 - Dado o array transforme em uma string
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  // funcão .concat() -> concatena os parametros recebidos
  return arr.reduce((acc, elem) => acc.concat(elem), []);
}

// console.log(flatten(arrays));

// 2- Crie uma string com os nomes de todas as pessoas autoras.

// const arrayElement = [];
// for (element of books) {
//   console.log(element.author.name);
//   arrayElement.push(element.author.name);
// }
// console.log(arrayElement);

// reduce tem 4 parametros -> (acumulador, curr, index, array)
// const reduceNames = (array) => {
//   const bookName = array.reduce((acc, book) => {
//     // console.log(`acc:${acc} -----> curr:${book.author.name}`);
//     return `${acc} ${book.author.name}`;
//   },' ');
//   // metodo .trim() retira os espaços do inicio e fim da string
//   return bookName.trim();
// };

// console.log(reduceNames(books));

// Refatorando o codigo da 2
const reduceNames = (array) => array.reduce((acc, book) => `${acc} ${book.author.name}`,' ').trim();

// console.log(reduceNames(books));


// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// let acumulador2 = 0;
// for (element of books) {
//   acumulador2 += (element.releaseYear - element.author.birthYear);
// }
// console.log(acumulador2/books.length);

// const averageAge = (arr) => {
//   const media = arr.reduce((acc, curr) => {
//     // console.log(array.length);
//     return acc + (curr.releaseYear - curr.author.birthYear);
//   }, 0);
//   return media / arr.length;
// }
// console.log(averageAge(books));

// Refatorando o exercicio 3 
const averageAge = (arr) => {
  const media = arr.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0);
  return media / arr.length;
}

// console.log(averageAge(books));

// 4 - Livro com maior nome
let acumulador3 = books[0].name;
for (element of books) {
  if (acumulador3.length > element.author.length) {
    acumulador3 = element.name;
  }
}
// console.log(acumulador3);

// const longestNamedBook = (arr) => {
//   // comparar quantas letras possuem o elemento.name do objeto 
//   return arr.reduce((acc, curr) => {
//     if(curr.name.length > acc.length){
//       return acc = curr.name;
//     }
//     return acc;
//   }).name;
// }

// console.log(longestNamedBook(books));

// Refatorando questão 4
const longestNamedBook = (arr) => arr
  .reduce((acc, curr) => curr.name.length > acc.length ? acc = curr : acc).name;

// console.log(longestNamedBook(books));

// 5 - retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// let acumulador4 = 0;

// function containsA() {
//   for (palavra of names) {
//     // console.log(palavra);
//     for (letra of palavra.toLowerCase()) {
//       // console.log(letra);
//       if (letra === 'a') {
//         acumulador4 += 1;
//       }
//     }
//   }
//   return acumulador4;
// }
// console.log(containsA());

// const containsA = (arr) => {
//   const palavra = arr.reduce((acc, curr) => {
//     console.log('Numero palavras: ', curr);
//     return acc.concat(curr.split(''));
//   }, []);
//   console.log(palavra);
//   const letra = palavra.reduce((acc2, curr2) => {
//     if(curr2.toLowerCase() === 'a'){
//       return acc2 + 1;
//     }
//     return acc2;
//   }, 0);
//   return letra;
// };


// Refatorando o exercicio 5 
// const containsA = (arr) => {
//   const palavra = arr.reduce((acc, curr) => acc.concat(curr.split('')), []);
//   const letra = palavra.reduce((acc2, curr2) => curr2.toLowerCase() === 'a' ? acc2 + 1 : acc2, 0);
//   return letra;
// };
// console.log(containsA(names))

// Refatorar ainda mais o exercicio 5
const containsA = (arr) => arr.reduce((acc, curr) => acc.concat(curr.split('')), [])
.reduce((acc2, curr2) => curr2.toLowerCase() === 'a' ? acc2 + 1 : acc2, 0);

console.log(containsA(names))


// 7 - Agora vamos criar um novo array de objetos a partir das informações abaixo,
// onde cada objeto terá o formato { name: nome do aluno, average: media das notas }.
// Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 
// de alunos, aqui além de reduce será necessário utilizar também a função map. 
// Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto 
// esperado na constante expected.

// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// let media = [];
// let nota = 0;

// function studentAverage() {
//   for (let i = 0; i <= grades.length; i += 1){
//     for(let j of grades[i]){
//       nota =+ j;
//     }
//     media.push({name:students[i], average: nota/(grades[i].length)});
//     nota = 0;
//   }
//   return media;
// }
// console.log(studentAverage());

