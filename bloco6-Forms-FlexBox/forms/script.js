//teste do prevent.default para o botão enviar
let buttonEnviar = document.querySelector('#button-submit');
let nameInput = document.querySelector('#input-name');
//Adicionando um evento
//Função event.preventDefault
function submit(evento){
    evento.preventDefault();
    console.log(nameInput.value);
}
window.onload = function(){
    buttonEnviar.addEventListener('click', submit);
    
}
