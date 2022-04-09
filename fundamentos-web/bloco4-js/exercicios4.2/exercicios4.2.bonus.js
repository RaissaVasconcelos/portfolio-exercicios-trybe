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