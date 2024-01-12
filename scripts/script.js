let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let cep = document.querySelector("#cep");
let dataInicio = document.querySelector("#dataInicio");
let dataFim = document.querySelector("#dataFim");
let gatos = document.querySelector("#gatos");
let obs = document.querySelector("#obs");

nome.style.width = "80%";
email.style.width = "80%";
cep.style.width = "80%";
dataInicio.style.width = "30%";
dataFim.style.width = "30%";

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length <= 3) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome válido";
    txtNome.style.color = "green";
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = "Email inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "green";
  }
}

function validaCEP() {
  let txtCEP = document.querySelector("#txtCEP");
  let cepInput = document.querySelector("#cep");

  // Remover caracteres não numéricos do CEP
  let cep = cepInput.value.replace(/\D/g, "");

  // Verifica se o CEP possui o tamanho correto (8 dígitos)
  if (cep.length !== 8) {
    txtCEP.innerHTML = "CEP inválido";
    txtCEP.style.color = "red";
  } else {
    txtCEP.innerHTML = "CEP válido";
    txtCEP.style.color = "green";
  }
}

