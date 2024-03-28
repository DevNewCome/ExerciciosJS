frm = document.querySelector("form")
resp1 = document.querySelector("#resp1")
resp2 = document.querySelector("#resp2")

frm.addEventListener("submit",(e)=>{
    e.preventDefault();

    nomeProduto = frm.inProduto.value;
    valorProduto = Number(inPreco.value);

    terceiroProduto = valorProduto / 2;
    total = (valorProduto * 2) + terceiroProduto

    resp1.innerText = `${nomeProduto} - Promoção Leve 3 por R${total.toFixed()}`
    resp2.innerText = `O 3° Produto sairá por apenas R$${terceiroProduto.toFixed()}`
})

