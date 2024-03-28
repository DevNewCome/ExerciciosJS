const resultado = document.querySelector('#resultado')
const btnAdd = document.querySelector('#btnAdicionar')
const btnOrdem = document.querySelector('#btnVerificaOrdem')
let numeros = []

btnAdd.addEventListener('click',(e)=>{
e.preventDefault();


let numeroInput = document.querySelector('#numeros').value
numeros.push(numeroInput)
console.log(numeros)

let lista = ''
for(let i = 0; i < numeros.length; i++){
    lista+= numeros[i]
}
lista = numeros.join(', ')
console.log(`Lista:${lista}`)
resultado.innerText = lista
clear()
})

btnOrdem.addEventListener('click',(e)=>{
    e.preventDefault();

    let ordenar = numeros.map(num => parseInt(num)).sort((a,b) => a - b);
    console.log(`Lista ordenada: ${ordenar}`)

    resultado.innerText = ordenar.join(', ')
    let container = document.querySelector('.container')
    let span = document.createElement('span')
    span.innerText = '\n'+'AGORA ESTÁ NA ORDEM'
    container.appendChild(span)
})


function clear(){
    let numeros = document.querySelector('#numeros')
    numeros.value = ''
    numeros.focus();
}