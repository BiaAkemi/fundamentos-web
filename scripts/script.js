let nome = window.document.getElementById('nome')
let emaiil = document.querySelector('#email')
let cep = document.querySelector("#cep");
let dataInicio = document.querySelector("#dataInicio");
let dataFim = document.querySelector("#dataFim");
let gatos = document.querySelector("#gatos");
let obs = document.querySelector('#obs')

nome.style.width = '80%'
emaiil.style.width = '80%'
cep.style.width = '80%'
dataInicio.style.width = '30%'
dataFim.style.width = "30%";

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <= 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    
    if(email.value.indexOf('@') == -1){
            txtEmail.innerHTML = "Nome válido";
            txtEmail.style.color = "green";
    }
}

}