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
    txtNome.innerHTML = "";
    nomeOk = true
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = "Email inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "";
    emailOk = true
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
    txtCEP.innerHTML = "";
    cepOk = true
  }
}

function validaDatas() {
  let txtDataInicio = document.querySelector("#txtDataInicio");
  let txtDataFim = document.querySelector("#txtDataFim");

  let dataInicio = new Date(document.querySelector("#dataInicio").value);
  let dataFim = new Date(document.querySelector("#dataFim").value);

  // Verifica se a data de início é menor que a data de término
  if (dataInicio > dataFim) {
    txtDataInicio.innerHTML =
      "Data de início deve ser anterior à data de término";
    txtDataInicio.style.color = "red";
    txtDataFim.innerHTML =
      "Data de término deve ser posterior à data de início";
    txtDataFim.style.color = "red";
  } else {
    txtDataInicio.innerHTML = "";
    txtDataFim.innerHTML = "";
    dataOk = true
  }
}

// Adiciona um ouvinte de evento para chamar a função sempre que as datas forem alteradas
document.querySelector("#dataInicio").addEventListener("input", validaDatas);
document.querySelector("#dataFim").addEventListener("input", validaDatas);

function enviar() {
    if (nomeOk == true && emailOk == true && cepOk == true && dataOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Por favor, preencha os dados corretamente antes de enviar.')
    }
}