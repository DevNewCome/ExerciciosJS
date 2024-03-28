let resposta = document.querySelector('#resp')
let form = document.querySelector('#frm')


form.addEventListener('submit',(e) => {
    e.preventDefault();

    let data = document.querySelector('#inData').value  
    let anoAtual = new Date().getFullYear()
    let anoSelecionado = new Date(data).getFullYear();

    resposta.innerText = anoAtual - anoSelecionado - 1;
})







