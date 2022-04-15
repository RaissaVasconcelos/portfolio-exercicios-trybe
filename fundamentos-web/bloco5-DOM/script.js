//Exercicio de Fixação 
/*
let paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

//Definar a tag em uma variavel
let titulo = document.getElementById("page-title");
titulo.innerText = "Scream";

let subtitle = document.getElementById("subtitle");
subtitle.innerText = "Massacre da Serra Elétrica";
subtitle.style.color = "orange";

*/

//Exercicio de Fixação 2

let emergy = document.getElementsByClassName("emergency-tasks")[0];
emergy.style.backgroundColor = "pink";

let noEmergy = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergy.style.backgroundColor = "green";

//Como não foi definido Id usamos o query selector para conseguir modificar o titulo 
//acessando a classe e depois a tag h3

let titleEmergency = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < titleEmergency.length; index += 1) {
    titleEmergency[index].style.backgroundColor = 'red';
}

let titleNoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for(let index1=0; index1<titleNoEmergency.length; index1+=1){
    titleNoEmergency[index1].style.backgroundColor = 'black';
}

let footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = 'gray';








