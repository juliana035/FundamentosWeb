//! declaração de variaveis 
/*como podemos acessar o dom fora o elemento acima:
por tag:document.getELementByTagName()
por Id: getElementById()
por nome: getElementsByName
por classe: getElementsByClassName()
por seletor:querySeletor()

*/
let nome=window.document.getElementById("nome")
let email=document.querySelector("#email")
let assunto=document.querySelector("#assunto")
let nomeOk=false
let emailOk=false
let assuntoOk=false
let mapas= document.querySelector("#map")

nome.style.width='100%'
email.style.width='100%'

function validaNome(){
    let txtNome= document.querySelector('#txtNome')
    
    if(nome.value.length< 3 ){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color= 'blue'
    }else{
 txtNome.innerHTML = 'Nome Válido'
 txtNome.style.color= 'orange'
 nomeOk=true
    }

    }
function validaEmail(){
let txtEmail= document.querySelector('#txtEmail')

if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtEmail.innerHTML = 'E-mail Inválido'
    txtEmail.style.color ="pink"
}else {
    txtEmail.innerHTML = 'Email Válido'
    txtEmail.style.color ="yellow"
    emailOk=true
    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "texto muito grande,favor digitar até 100 caracteres"
        txtAssunto.style.color = 'yellow'
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk=true
    }

    }
function enviar (){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert("formulário enviado")
    }else{
        alert ("Preencha o Formulário corretamente")

    }
    }

function mapaZoom(){
mapas.style.width = ("800px")
mapas.style.height = ("600px")
}
function mapaNormal(){
mapas.style.width = ("400px")
mapas.style.height = ("250px")

}