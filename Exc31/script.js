let resp = document.querySelector('#respErros')
let frm = document.querySelector('#frm')


frm.addEventListener('submit',(e)=>{
    e.preventDefault()

    let senha = document.querySelector('#inPassword').value 
    let erros = []

    if(senha < 8 || senha > 15){
        erros.push('possuir entre 8 e 15 caracteres')
    }
    if(senha.match(/[0-9]/g) == null){
        erros.push('A senha deve conter no minímo 1 numero')
    } // senao possuir numeros
    if(!senha.match(/[a-z]/g)){
        erros.push('Senha deve possuir no minimo 1 letra minuscula')
    }
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1){
        erros.push('A senha deve ter no minimo 2 letras maiusculas')
    }
    if(!senha.match(/[\W|_]/g)){
        erros.push('a senha deve conter no minimo 1 simbolo')
    }

    if(erros.length == 0){
        resp.innerText = 'Ok senha valida'
    }else{
        resp.innerText = `Erros: \n ${erros.join('\n- ' )}`
    }
})