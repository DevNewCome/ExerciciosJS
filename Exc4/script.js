frm = document.querySelector("form");
resp1 = document.querySelector("#resp1")
resp2 = document.querySelector("#resp2")


frm.addEventListener("submit",(e)=>{
 e.preventDefault();

nomeMedicamento = frm.inMedicamento.value;
precoMedicamento = Number(frm.inPreco.value);
desconto = Math.floor(precoMedicamento) * 2;

resp1.innerText = `Promoção de: ${nomeMedicamento}`
resp2.innerText = `Leve 2 por apenas R$${desconto.toFixed(2)}`
})