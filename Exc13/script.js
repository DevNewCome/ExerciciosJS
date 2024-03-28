const frm = document.querySelector('#frm');
const inChin = document.querySelector('#inChin')
const anos = document.querySelector('#inAnos')
const resp = document.querySelector('#resp')


frm.addEventListener("submit", (e) => {    // "escuta" evento submit do form
    e.preventDefault() // evita envio do form
  
    // obtém os dados de entrada
    const chin = Number(frm.inChin.value)
    const anos = Number(frm.inAnos.value)
  
    // cria uma variável do tipo String, que irá concatenar a resposta
    let resposta = ""
    let total = chin
  
    // define o laço de repetição
    for (let i = 1; i <= anos; i++) {    
      resposta = resposta + i + "º Ano: " + total + " Chinchilas\n"
      total = total * 3
    }
  
    // altera o conteúdo da tag de resposta
    resp.innerText = resposta
  })