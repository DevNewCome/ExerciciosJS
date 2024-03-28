const btnAdd = document.querySelector('#btnAdd')
const btnListar = document.querySelector('#btnListar')
const btnFiltrarPreco = document.querySelector('#btnFiltrarPreco')
const btnSimularPromocao = document.querySelector('#btnSimularPromocao')
let carros = []

btnAdd.addEventListener('click', (e)=>{
    e.preventDefault();

    const modeloInput = document.querySelector('#inModelo')
    const precoInput = document.querySelector('#inPreco')
    const anoInput = document.querySelector('#inAno')

    modelo = modeloInput.value;
    preco = parseInt(precoInput.value)
    ano = anoInput.value;

    carros.push({modelo, preco, ano})
    console.log(carros)
})

btnListar.addEventListener('click',( e )=>{
    e.preventDefault();
    listarCarros()
})

btnFiltrarPreco.addEventListener('click', (e) => {
    e.preventDefault()
    filtrarPorPreco()
    alert('cl')
})

btnSimularPromocao.addEventListener('click',(e) => {
    e.preventDefault()
    simularPromocao()
})


function simularPromocao(){
    let listaEscrita = document.querySelector('#listaCarros')
    const desconto = Number(prompt('Qual o percentual de desconto ?'))
        if(desconto === 0 || isNaN(desconto)){
            alert('digite um numero valido')
        }
            let carrosDesc = carros.map(carro => ({
                modelo: carro.modelo,
                preco: carro.preco - (carro.preco * desconto / 100),
                ano: carro.ano
            }))

            listaEscrita.innerHTML = '';

            carrosDesc.forEach((carro) => {
                let criaLiCarros = document.createElement('li')
                criaLiCarros.innerText = `Modelo: ${carro.modelo} Ano: ${carro.ano} Preco: ${carro.preco}`
                listaEscrita.appendChild(criaLiCarros)
               })

}

function listarCarros(){
    let listaEscrita = document.querySelector('#listaCarros')

    let lista = carros.map(carro => ({
        modelo: carro.modelo,
        ano: carro.ano,
        preco: carro.preco
    }))

    listaEscrita.innerHTML = '';

       lista.forEach((carro) => {
        let criaLiCarros = document.createElement('li')
        criaLiCarros.innerText = `Modelo: ${carro.modelo} Ano: ${carro.ano} Preco: ${carro.preco}`
        listaEscrita.appendChild(criaLiCarros)
       })
}



function filtrarPorPreco(){
    let listaEscrita = document.querySelector('#listaCarros')
    let ListaPrecoOrdenado = carros.sort((a,b) => a.preco - b.preco)
        console.log(ListaPrecoOrdenado)

        listaEscrita.innerHTML = ''

        for(let carro of ListaPrecoOrdenado){
            let carroLi = document.createElement('li')
            carroLi.innerText = `Modelo: ${carro.modelo} Ano: ${carro.ano} Preco: ${carro.preco}`
            listaEscrita.appendChild(carroLi)
        }

        
}
