frm = document.querySelector('#form');
resultado = document.querySelector('.resultado')
let produtos = []

frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    criaProduto();
    displayProduct();
    clean();
})



function criaProduto(){
   let nomeProduto = document.querySelector('#nomeProduto').value;
   let selecaoDeProdutos = document.querySelector('#selectProdutos').value;
   let preco = document.querySelector('#precoProduto').value;
   let min = 10000000;
   let max = 99999999;

   let ean = "789" + Math.floor(Math.random() * (max - min + 1) + min)

   //verificando se o produto ja existe
    while(produtos.some(p => p.ean === ean)){
        ean = "789" + Math.floor(Math.random() * (max - min + 1) + min)
    }

    produtos.push({nomeProduto, selecaoDeProdutos, preco, ean})
    console.log(produtos)
        clean();


}

function displayProduct(){
 let  resultado =  document.querySelector('.resultado')
 let lista = ''
 for(let i = 0; i < produtos.length; i++){
    lista += `Nome: ${produtos[i].nomeProduto} Preço: ${produtos[i].preco} EAN: ${produtos[i].ean}\n`
 }
 resultado.innerText = lista 
}

function clean(){
     let nomeProduto = document.querySelector('#nomeProduto')
     let selecaoDeProdutos = document.querySelector('#selectProdutos')
     let preco = document.querySelector('#precoProduto');

     nomeProduto.value = ''
     selecaoDeProdutos.value = ''
     preco.value = ''
}

function pesquisarEan(){
    let eanProduto = prompt('digite o código');

    let eanFiltrado = produtos.find(produtos =>{
        return produtos.ean === eanProduto
    })
    if(eanFiltrado){
        resultado.innerText = `Nome: ${eanFiltrado.nomeProduto} Preço: ${eanFiltrado.preco} EAN: ${eanFiltrado.ean}\n`;
    }else{
        alert('Produto ainda não existe')
    }
    
}
