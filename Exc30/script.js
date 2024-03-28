const resp = document.querySelector('#resp')
const frm = document.querySelector('#frm')


frm.addEventListener('submit',(e)=>{
e.preventDefault()

let nome = document.querySelector('#inNome').value
let nomeSeparado = nome.split(' ')
let email = ''

    for(let i = 0; i < nomeSeparado.length - 1; i++){ // letras i - 1 retira o ultimo parametro
        email += nomeSeparado[i].charAt(0)
    }
email += nomeSeparado[nomeSeparado.length - 1] + '@empresa.com.br'
resp.innerText = `Email: ${email.toLowerCase()}`
})
