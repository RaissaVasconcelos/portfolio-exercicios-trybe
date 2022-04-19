// Exercicio de Fixação
//1.Acesse o elemento elementoOndeVoceEsta .
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta')
//2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let paiOndeVoceEsta = ondeVoceEsta.parentElement;
paiOndeVoceEsta.style.color = 'red';

//3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Novo texto do filho';

//4. Acesse o primeiroFilho a partir de pai 
//firstElementChild -> retorna o primeiro elemento filho
let primeiroFilho = paiOndeVoceEsta.firstElementChild;

//5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta 
// previousElementSibling -> retorna um elemento anterior

let primeiroFilho1 = ondeVoceEsta.previousElementSibling;

//6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta 
//ele vai retornar o texto Atenção porque é próximo nó texto
let atencao = ondeVoceEsta.nextSibling;
console.log(atencao); 

//7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
let terceiroFilho = ondeVoceEsta.nextElementSibling;

//8. Agora acesse o terceiroFilho a partir de pai .
//Ideia é pegar o ultimo elemento filho e voltar um elemento anterior
let terceiroFilho1 = paiOndeVoceEsta.lastElementChild.previousElementSibling;

//Exercicio de Fixação 2
//1. Crie um irmão para elementoOndeVoceEsta

//primeiro acessar o elemento onde eu quero criar
let elemento1 = document.getElementById('pai');
//criar o elemnto 
let novoElemento1 = document.createElement('section');
//o novo elemento vai receber um valor
//id retorna o elemento criado como uma tag 
novoElemento1.id = 'novoElemento1';
//adicionar o elemento 
elemento1.appendChild(novoElemento1);

//2. Crie um filho para elementoOndeVoceEsta .
let elemento2 = document.getElementById('elementoOndeVoceEsta');
let irmaoOndeVoceEsta = document.createElement('section');
irmaoOndeVoceEsta.id = 'irmaoOndeVoceEsta';
elemento2.appendChild(irmaoOndeVoceEsta);

//3. Crie um filho para primeiroFilhoDoFilho .
let elemento3 = document.getElementById('primeiroFilhoDoFilho');
let filhoDoprimeiroFilhoDoFilho = document.createElement('section');
filhoDoprimeiroFilhoDoFilho.id = 'filhoDoprimeiroFilhoDoFilho';
elemento3.appendChild(filhoDoprimeiroFilhoDoFilho);

//4. A partir desse filho criado, acesse terceiroFilho .
let acessoPrimeiroFilho = filhoDoprimeiroFilhoDoFilho.parentElement;
let acessoElementoOndeVoceEsta = acessoPrimeiroFilho.parentElement;
let acessoTerceiroFilho = acessoElementoOndeVoceEsta.previousElementSibling;
console.log(acessoTerceiroFilho);

//Exercicio de fixação 3 - Remover Elementos
//Remova todos os elementos filhos de paiDoPai 
//exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

//primeiro acessa o pai para remover o filho
primeiroFilhoDoFilho.removeChild(filhoDoprimeiroFilhoDoFilho);
paiOndeVoceEsta.removeChild(novoElemento1);
paiOndeVoceEsta.removeChild(quartoEUltimoFilho);
paiOndeVoceEsta.removeChild(terceiroFilho);


