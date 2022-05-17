const { number } = require("yargs");

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

// Exercicio 01 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947
const findDate = (arr, date) => arr.find(element => element.author.birthYear === date).author.name;
console.log(findDate(books, 1947));

// Retorne o nome do livro de menor nome, dica forEach
function smallName(array) {
  // variavel é inicializado sem definição, logo será interpretada como undefined/falsy
  let book;
  array.forEach(element => {
    // negando a variavel book eu garanto que ela se torne true
    if (!book || element.name.length < book.length) {
      // console.log(element.name);
      book = element.name;
    }
  });
  return book;
}

console.log(smallName(books));

// Foguete -> se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
// Seculo XX se nasceram entre os anos 1901 e 2000

function birthYearXX(array){
  return array.every((element) => (
    element.author.birthYear > 1901 && element.author.birthYear < 2000
  ));
}
 
console.log(birthYearXX(books));

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const decade80 = (array) => array.some((book) => book.releaseYear < 1990 && book.releaseYear > 1970);

console.log(decade80(books));

// Exercicios a fazer:
// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
// Ordene os livros por data de lançamento em ordem decrescente.
// Encontre o primeiro livro cujo nome possui 26 caracteres.