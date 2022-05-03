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
}

/* Exercicio de Fixação 2 - bloco 5.3 */
/*
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
})*/

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//função para receber os dias criados
function createDaysOfMonth() {
    //acessa a ul onde vão ser criados os dias
    let addDays = document.querySelector('#days');
    //for para criar todos os elementos dias do mes de dezembro
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        //criar o elemento
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;
        dayItem.classList.add('days');
        dayItem.id = 'days';
        addDays.appendChild(dayItem);
        
        //o elemento criado vai receber o valor de cada posição do array conforme as condições
        if (day === 24 || day === 31) {
            dayItem.classList.add('holiday');
        }
        else if (day === 4 || day === 11 || day === 18) {
            dayItem.classList.add('friday');
        }
        else if (day === 25) {
            dayItem.classList.add('holiday');
            dayItem.classList.add('friday');
        }
    }
}

createDaysOfMonth();

//Criando os buttons 
function createButton() {
    //acessar o elemento pai
    let paiButton = document.querySelector('.buttons-container');
    //criar um button
    let button = document.createElement('button');
    //adicionar classe
    button.id = 'btn-holiday';
    button.innerText = 'holiday';
    button.style.backgroundColor = 'green';
    //adicionar o button a classe buttons-container
    paiButton.appendChild(button);
}

createButton();

function buttonHolidayColor() {
    //acessar o button holiday
    let button = document.getElementById('btn-holiday');
    //acessar os elementos com classe holiday
    let elemHoliday = document.querySelectorAll('.holiday');
    //lógica para deixar ele atribuir o valor de cor quando clicar e sumir a cor quando clicar novamente
    let on = 'rgb(788, 123, 234)';//verde
    let off = 'rgb(255, 255, 255)';//branco
    //Evento para mudar a cor de fundo dos elementos com a classe Holiday
    button.addEventListener('click', () => {
        for (let index = 0; index < elemHoliday.length; index += 1) {
            //elemHoliday[index].style.backgroundColor = 'green';
            //obs: lógica usando != não funcionou
            if (elemHoliday[index].style.backgroundColor === off) { //-> se a cor for igual a branco, background se altera
                elemHoliday[index].style.backgroundColor = on;
            }
            else {
                elemHoliday[index].style.backgroundColor = off;
            }
        }
    })
}
//chama a função
buttonHolidayColor();

//button sexta-feira
function buttonSextou() {
    let button = document.createElement('button');
    button.id = 'btn-friday';
    button.innerText = 'sexta-feira';
    button.style.backgroundColor = 'rgb(788, 123, 234)';
    //adicionar o elemento ao pai
    let paiButton = document.querySelector('.buttons-container');
    paiButton.appendChild(button);

}
buttonSextou();

//adicione sexta-feira ao botão do evento click
function buttonAddSextou() {
    //acessar o botão
    let button = document.querySelector('#btn-friday');
    //adicionar um evento a este button
    button.addEventListener('click', () => {
        //percorrer na classe holiday
        let friday = document.querySelectorAll('.friday');
        //lógica para reverter o sextou
        let ok = 'sextou';
        //os dias da semana da sexta-feira
        let arrayFriday = [4, 11, 18, 25];
        for (let index = 0; index < friday.length; index += 1) {
            if (friday[index].innerText !== ok) {
                friday[index].innerText = ok;
            }
            else {
                friday[index].innerText = arrayFriday[index];
            }
        }
    })
}

buttonAddSextou();

//efeito zoom
function zoomDays() {
    //acessar o elemento ol
    let day = document.querySelector('#days');
    day.addEventListener('mouseover',(evento) =>{
        evento.target.style.fontSize = "30px"; //altera o tamanho
        evento.target.style.fontWeight = '600px'; //altera a largura
    })
}

zoomDays();

//saida do efeito zoom
function zoomDaysOut(){
    //acessar o elemento ol
    let day = document.querySelector('#days');
    day.addEventListener('mouseout',(evento) =>{
        evento.target.style.fontSize = "20px"; //altera o tamanho
        evento.target.style.fontWeight = '200'; //altera a largura
    })
}
zoomDaysOut();

//Adicionando uma tarefa a my-tasks
function addMyTasks(task){
    //acessa o elemento pai
    let paiMyTasks = document.querySelector('.my-tasks');
    //criar um elemento spam
    let span = document.createElement('span');
    span.innerText = task;
    paiMyTasks.appendChild(span);
}
addMyTasks('Codar'); //verificar como deixar as listas em block
addMyTasks('Estudar Inglês');

//Adionando a classe selected







