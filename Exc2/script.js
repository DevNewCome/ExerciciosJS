frm = document.querySelector("form")
resp1 = document.querySelector("#resp1")
resp2 = document.querySelector("#resp2")
resp3 = document.querySelector("#resp3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault();

veiculo = frm.inVeiculo.value;
precoVeiculo = Number(frm.inPreco.value);

// calculando promocao

promocao = precoVeiculo * 0.50 // 0.50 == 50%
parcela  = precoVeiculo / 12;

resp1.innerText = `Promoção: ${veiculo}`;
resp2.innerText = `Entrada de ${promocao.toFixed(2)}`
resp3.innerText = `Parcelado em 12x de ${parcela.toFixed(2)}`

})
