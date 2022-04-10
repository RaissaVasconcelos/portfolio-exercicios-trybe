//Fatorial de 10

let fatorial = 10;

for(let index=fatorial; index>1;index-=1){
    fatorial = fatorial * (index-1);
}

console.log(fatorial);

//Algoritmo capaz de inverter uma palavra

let word = "trybe";
let wordInverter = [];
let tamanho = word.length;

for(let indexf=tamanho-1; indexf>=0;indexf-=1){
    wordInverter.push(word[indexf]);
}
console.log(wordInverter);

//Considere o array de algumas strings abaixo
let array = ['java', 'javascript', 'python', 'html', 'css'];
//Considere um algoritmo que pegue a maior e menor palavra
let maior = 0;
let menor = 0;


for(let position=0; position<array.length;position+=1){
    let auxA = array[position].length;
    if(auxA>maior){
        maior = auxA;
    }
    else{
        menor = auxA;
    }   
}

console.log(maior);
console.log(menor);

//OBS: A lógica deu certo pelo fato do primeiro elemento não ser o menor
//Mas uma ideia válida seria ordenar os arrays e pegar a primeira e ultima posição como menor e maior

//Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
//Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
//Condição pra ser primo = numero%numero==1 e numero%numero==1
//A ideia é dividir em um intervalo entre a posição inicial e final da contagem 
//do numero, ser for divisivel nesse intervalo, o numero n é primo
//Obs: o if(variavel boleana) não precisa coloca variavel === true

let primeBig = 0;

for(let number=0; number<=50; number+=1){
    let prime = true;
    for(let division=2; division<number; division+=1){
        if(number%division===0){
            prime = false; 
            
        }
    }
    if(prime===true){
        primeBig=number;
    }
}

console.log("O maior numero primo:" + primeBig);

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);
