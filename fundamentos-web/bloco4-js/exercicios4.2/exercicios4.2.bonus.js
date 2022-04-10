//Algoritmo Bublle Sort

//Ordenar o array number em ordem crescente
//A ideia é inicialmente fazer a comparação de um elemento do array a frente
//com os demais elementos, ex: o elemento na posição 4 vai comparar com a posição 0, 1, 2 e 3. 
//vamos precisar de uma auxiliar pra fazer essa troca

let numbers = [5, 3, 9, 19, 70, 8, 100, 2, 35, 27];

for(let index=1; index<numbers.length;index+=1){
    for(let index2=0; index2<index; index2+=1)
        if(numbers[index]<numbers[index2]){
            let aux = numbers[index2];
            numbers[index2] = numbers[index];
            numbers[index] = aux;
        }
}

console.log(numbers);

//Ordenação do texto em ordem decrescente

for(let index3=1; index3<numbers.length; index3+=1){
    for(let index4=0; index4<index3; index4+=1)
        if(numbers[index3]>numbers[index4]){
            let aux2 = numbers[index4];
            numbers[index4] = numbers[index3];
            numbers[index3] = aux2;  
        }
}
console.log(numbers);

let numbers12 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultip = [];
let tamanho = numbers12.length;

for(let index5=1; index5<=tamanho; index5+=1){
        if(index5<numbers12.length){
            let aux3 = numbers12[index5]*numbers12[index5-1];
            numbersMultip.push(aux3);
        }
        else{
            let aux3 = numbers12[index5-1]*2;
            numbersMultip.push(aux3);
        }
}
console.log(numbersMultip);

//resposta = 45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

/*for(let i=0; i<15; i+=1){
    console.log(i);
}*/