const frm = document.querySelector("form")
const resp = document.querySelector("#resp1")

frm.addEventListener("submit",(e)=>{
    e.preventDefault();

const quilo = Number(frm.inQuilo.value);
const consumo = Number(frm.inConsumo.value);

const valorpago = (quilo / 1000) * consumo;

resp.innerText = `o valor a ser pago é: ${valorpago}`

})