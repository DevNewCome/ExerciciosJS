resposta = document.querySelector('#resp')


function descrecer(){
    numeroValor = document.querySelector('#numberValue').value;
    let resp = `Entre o ${numeroValor} e 1: `
    console.log(numeroValor)

    if (numeroValor === ""){
        alert('Por favor preencha o numero')
        return;
    }

   
    for(i = numeroValor; i > 0; i-- ){
      resp += i + " , "  
    }

    resposta.innerText = resp;
    numeroValor.innerText = ''
    console.log(resp)
}
