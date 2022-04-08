//exercicios de array e laço for

let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*Nesse primeiro exercício, percorra o array imprimindo todos os 
valores nele contidos com a função console.log() ;
*/

for(let index = 0; index < number.length; index+=1){
    console.log(number[index]);
}

/* Para o segundo exercício, some todos os valores contidos 
no array e imprima o resultado; */
let somaNumber = 0;

for(let index=0; index<number.length; index+=1){
    somaNumber += number[index];
}

console.log("Valor da soma:" + somaNumber)

/* Para o terceiro exercício, calcule e imprima a média aritmética 
dos valores contidos no array; */

let mediaNumber = somaNumber / (number.length); 
console.log("Valor da media:" + mediaNumber);

/*Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
imprima a mensagem: "valor maior que 20". 
Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

if(mediaNumber>20){
    console.log("Valor maior que 20");
}
else{
    console.log("Valor menor que 20");
}

/*Utilizando for , descubra qual o maior valor contido no array e imprima-o; */
let maior = 0;

for(let index = 0; index < number.length; index+=1){
    if(maior < number[index]){
        maior = number[index];
    }
}

console.log("Maior numero do number:" + maior)

/*Descubra quantos valores ímpares existem no array e 
imprima o resultado. Caso não exista nenhum, imprima a mensagem:
 "nenhum valor ímpar encontrado"; */
let impar = 0;

for(let index = 0; index < number.length; index+=1){
    if((number[index]%2) != 0){
        impar += 1; 

    }
}

if(impar != 0){
    console.log("Valores impares no array:" + impar);
}
else{
    console.log("Nenhum valor de impar encontrado")
}

/* Utilizando for , descubra qual o menor valor contido no array e imprima-o;*/
/** [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 */
let aux = number[0];
let menor = 0;
/* O pulo do gato está em pegar o primeiro valor da posição 0 e comparar
com os outros elementos do array */
for(let index = 0; index < number.length; index+=1){
    if(aux > number[index]){
        aux =  number[index];
    }
}

console.log("Menor numero do number:" + aux);

/*Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; */

for(let index=1; index<26; index +=1){
    console.log(index);
}

/*Utilizando o array criado no exercício anterior 
imprima o resultado da divisão de cada um dos elementos por 2  */

for(let index=1; index<26; index +=1){
    console.log(index/2);
}