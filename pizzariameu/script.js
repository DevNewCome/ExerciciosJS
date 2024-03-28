let btnCadastro = document.querySelector('#cadastro')
let pizzaTamanho = document.querySelectorAll('input[type="radio"][name="tamanho"]');
let valor = document.querySelector('#valor')
let sabor = document.querySelector('#idSabor')
let pedido = document.querySelector('#addPedido')
let btnFinalizar = document.querySelector('#finalizarPedido')
let pedidos = []

let findSelected = () => {
 let selected = document.querySelector('input[name="tamanho"]:checked').value
 valorPizza();

 return selected
}

function valorPizza(){
    let pizzaTamanho = document.querySelector('input[name="tamanho"]:checked').value;
    let preco;
    if(pizzaTamanho === '8'){
        preco = 25
    }else if(pizzaTamanho === '12'){
        preco = 35
    }

     return preco
    
}



function findSabor(){
    let selectedSabor = sabor.value;

    return selectedSabor
}



function displayPedido(){
    let lista = document.querySelector('.list')
    let end = document.querySelector('#endereco').value
    let pedacos = findSelected()
    let sabor = findSabor()
    let preco = valorPizza()

    if(end === ''){
        alert('Escreva o endereço')
        return
    }

    lista.innerText+= `Sabor:  ${sabor}\nPedaços: ${pedacos}\n Endereço: ${end}\n Preço: ${preco}.00\n\n  `
}

function finalizarPedido(){
    let selected = document.querySelector('input[name="tamanho"]:checked').value
    let end = document.querySelector('#endereco').value
    let total = pedidos.reduce((acc, atual) => acc + atual.Preço, 0)
    let valor = document.querySelector('#valor')
    let horaPedido = new Date()
    let dataPedido = horaPedido.toLocaleDateString();
    let horaDoPedido = horaPedido.toLocaleTimeString()

if(end === ''){
    alert('Escreva o endereço')
    return
}

valor.innerText = `Valor total: ${total}R$\n Quantidade: ${pedidos.length}\n Data Pedido${dataPedido}\n Hora Pedido ${horaDoPedido}`

pedidos = [];
    limparPedido()
}


function limparPedido(){
    console.log('limparpedido')
    let lista = document.querySelector('.list')
    lista.innerText = ''
}

pedido.addEventListener('click', (e) =>{
e.preventDefault()
let end = document.querySelector('#endereco').value
        let pedacos = findSelected()
        let sabor = findSabor()
        let preco = valorPizza()

        if(end === ''){
            alert('digite o endereço')
                return       
        }

        pedidos.push({Pedaços:pedacos, Sabor:sabor, Preço:preco})
        valorPizza();
        displayPedido();
        console.log(pedidos)
})

btnCadastro.addEventListener('click',(e)=>{
    e.preventDefault()  
  
});

pizzaTamanho.forEach(e => {
    e.addEventListener('change', findSelected)
})


sabor.addEventListener('change', findSabor)

btnFinalizar.addEventListener('click', finalizarPedido)
