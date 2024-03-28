frm = document.querySelector("form");
resp1 = document.querySelector("#resp1")

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    valorUso = Number(frm.inValor.value);
    tempoUso = Number(frm.inTempoUso.value);

    pagar = Math.ceil((tempoUso / 15) * valorUso) //math ceil arredonda para cima

    resp1.innerText = `valor  a pagar ${pagar.toFixed(2)}`
   
})