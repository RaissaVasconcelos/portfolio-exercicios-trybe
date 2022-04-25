/* Exercicio de Fixação 1 - bloco 5.3
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
}*/

/* Exercicio de Fixação 2 - bloco 5.3 */
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//Resposta: Observei que na classe tech tinha um método de translatey em -20px, dai eu coloquei em 0 e voltou a ficar alinhado com os outros boxs

// 1. Copie esse arquivo e edite apenas ele;
firstLi.innerText = 'Aqui está um assunto que devo dominar';

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

//adicionar os eventos
firstLi.addEventListener('click',addTech);
secondLi.addEventListener('click',addTech);
thirdLi.addEventListener('click', addTech);

function addTech(evento){
    //acessar o elemento seletor que vou utilizar
    let seletor = document.querySelector('.tech');
    //remover onde ele achou esse elemento
    seletor.classList.toggle('tech');
    //adicionar ao elemento que originou o evento
    evento.target.classList.toggle('tech');
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
//criar o evento
input.addEventListener('input', changeText);
//criar a função
function changeText(evento){
    //acessar a classe select
    let seletor = document.querySelector('.tech');
    //o bloco com classe tech vai receber o texto do input
    seletor.innerText = evento.target.value;
}
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
//criar um evento
myWebpage.addEventListener('dblclick', ()=> {
    open('https://www.google.com/');
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover',()=>{
    const myWebpage = document.getElementById('my-spotrybefy');
    myWebpage.style.color = 'red';
})






