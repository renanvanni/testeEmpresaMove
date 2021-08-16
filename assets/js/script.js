// JS para a faleConosco.html
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')
let gif = document.querySelector('#gif')
let gif2 = document.querySelector('#gif2')
let gif3 = document.querySelector('#gif3')
let gif4 = document.querySelector('#gif4')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtN = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtN.innerHTML = 'Nome Inválido'
        txtN.style.color = 'red'
    }else{
        txtN.innerHTML = 'Nome Válido'
        txtN.style.color = 'green'
        nomeOK = true
    }
}

function validaEmail(){
    let txtE = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtE.innerHTML = 'E-mail inválido'
        txtE.style.color = 'red'
    }else{
        txtE.innerHTML = 'E-mail válido'
        txtE.style.color = 'green'
        emailOK = true
    }
}

function validaAssunto(){
    let txtA = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
        txtA.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtA.style.color = 'red'
        txtA.style.display = 'block'
    }else{
        txtA.style.display = 'none'
        assuntoOK = true
    }
}

function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}