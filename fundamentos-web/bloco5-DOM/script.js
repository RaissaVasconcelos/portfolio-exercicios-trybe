/* Funções de Manipulação do Dom */
//Função mudança tag p 
function textTag (tag){
    let texto = document.querySelectorAll(tag)[1];
    return texto.innerText = 'Vou esta trabalhando como Dev e comprando a minha casa junto com o meu marido Rocha';
}
//Função altera cor  
function boxVerde (boxClass){
    //Lembrar de definir a posição quando for criar a variavel
    let box = document.getElementsByClassName(boxClass)[0];
    return box.style.backgroundColor = 'rgb(76,164,109)';
}
//Crie uma função que mude a cor do quadrado vermelho para branco.
function boxWhite (boxClasseWhite){
    let boxWhite = document.querySelectorAll(boxClasseWhite)[0];
    return boxWhite.style.backgroundColor = 'white';
}
//Função que corrige h1
function corrigeTag (tag) {
    let tagh1 = document.getElementsByClassName(tag)[0];
    return tagh1.innerText = 'Exercício 5.1 - JavaScript';

}
//Função Modifique todo o texto da Tag P em Maiucúlo
function paragrafoMaiusculo (paragrafo) {
    let tagP = document.querySelectorAll(paragrafo)[0];
    //usar o método toUpperCase() para deixar todas as letras em maiscula
    return tagP.innerHTML = tagP.innerHTML.toUpperCase();
}

//Crie uma função que exiba o conteúdo de todas as tags <p> no console.
//id="main" -> acesso o id main e depois acesso todas as tags da main atraves da tag p
//let tagQuantidade = document.getElementsByTagName('p');
//console.log(tagQuantidade[0].innerHTML);

// Exercício 6
function showParagraphs(argumento) {
    let paragraphs = querySelectorAll(argumento);
    for (let index = 0; index < paragraphs.length; index += 1) {
      console.log(paragraphs[index].innerHTML);

    }
}
showParagraphs('.main-content p');



//Chama a função altera a tag p
textTag('.center-content p');
//Chama a função altera cor Verde
boxVerde('main-content');
//Chama a função altera cor Branca
boxWhite('.main-content .center-content');
//Chama a função corrige a tag1
corrigeTag('title');
//Chama a função paragrafoMaiusculo
paragrafoMaiusculo('.center-content p');

