let cep = document.getElementById('cep');
let rua = document.getElementById('rua');
let bairro = document.getElementById('bairro');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('estado');

function consultar() {
    let valorCep = cep.value;
    if(valorCep === "") {
        alert('digite o cep')
    }
    fetch(`https://viacep.com.br/ws/${valorCep}/json/`)
    .then(response => {
        response.json()
        .then(data => preencherCampos(data))
    })
}

function preencherCampos(data) {
    if('erro' in data) {
        alert('Cep não encontrado!');
        limparCampos();
        return
    }
    rua.value = data.logradouro;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
}

function limparCampos() {
    cep.value = "";
    rua.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
}