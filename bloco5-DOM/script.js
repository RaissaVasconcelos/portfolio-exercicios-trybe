//acessa um elemento clicar
let click = document.getElementById('clicar');
click.style.color = 'red';

//Adicionar o elemento a um evento click
click.addEventListener('click', recebeClick);

//criar a função recebe click
function recebeClick(eventoOrigem){
//target é o elemento que origina o evento
//type é o tipo de evento
console.log(eventoOrigem.target);
console.log(eventoOrigem.type);
}

let mouseOverLeaveButton = document.getElementById('mouse-over-leave');

//Adicionar os eventos

mouseOverLeaveButton.addEventListener('mouseover', mouseEmCima);
mouseOverLeaveButton.addEventListener('mouseleave', mouseSaiDoElemento);

//Criar as funções

function mouseEmCima(){
    console.log('Mouse passou por cima');
}

function mouseSaiDoElemento(){
    console.log('Mouse saiu do elemento');
}