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

// Exercicio Foguete - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const formatedBookNames = (arr) => arr.map((book) =>`${book.name}, ${book.genre}, ${book.author.name}`);

// console.log(formatedBookNames(books));

// Exercicio Foguete nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa 
// Expectativa 
// {
//   age: 31,
//   author: 'Isaac Asimov',
// }

const nameAndIdade = (array) => {
  return array.map((book) => {
    // Armazena as idades dos autores
    const idade = book.releaseYear - book.author.birthYear;
    return {age: idade, autor: book.name,}})
    .sort((a,b)=> a.age - b.age)};

// console.log(nameAndIdade(books));

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const fantasyOrScienceFiction = (array) => array.filter((book) => (book.genre === 'Ficção Científica' || book.genre === 'Fantasia'));

// console.log(fantasyOrScienceFiction(books));

// 4- Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
const oldBooksOrdened = (array) => {
  return array.filter((book) => (new Date().getFullYear() - book.releaseYear > 60))
  .sort((a,b) => (a.releaseYear - b.releaseYear))
  .map((book)=>(book.name));
};

// console.log(oldBooksOrdened(books));

// 5- Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const fantasyOrScienceFictionAuthors = (array) => array.filter((book) => book.genre !== 'Terror')
.map((book) => book.author.name).sort();

// console.log(fantasyOrScienceFictionAuthors(books));

// 6 - nome de todos os livros com mais de 60 anos de publicação.
// new Date().getFullYear() -> retorna o ano atual
const oldBooks = (array) => {
  return array.filter((book) => (new Date().getFullYear() - book.releaseYear > 60))
  .map((book) => book.name);
}

// console.log(oldBooks(books));

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// const authorWith3DotsOnName = (array) => {
//   const resultado = array.filter((book) => {
//     const recebe = book.author.name.split(' ');
//     // console.log(recebe)
//     const recebe2 = recebe.filter((name)=> name.endsWith('.'));
//     // console.log(recebe2);
//     if(recebe2.length === 3){
//       console.log(book.name);
//     }
//   })
//   return resultado;
// }

// console.log(authorWith3DotsOnName(books));
 
// let array = 'Oi Raissa, tudo bem?';
// let arraySeparado = array.split(' ');
// console.log(arraySeparado);

// Refatorando a 7 

const authorWith3DotsOnName = (array) => {
  return array.map((book)=>book.author.name)
  .filter((book)=>book.split(' ').endsWith('.'));
}

console.log(authorWith3DotsOnName(books));