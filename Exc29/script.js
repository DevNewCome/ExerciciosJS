let frm = document.querySelector('form');
let resp = document.querySelector('.resposta')


frm.addEventListener('submit',(e)=>{
e.preventDefault();

let nome = document.querySelector('#inNome').value
let displayNome = nome.split(' ')
let firstName = displayNome[0]
let lastName = displayNome[displayNome.length -1 ]

resp.innerText+= firstName + ' '+ lastName
})