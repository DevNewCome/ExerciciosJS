const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const titulo = frm.inTitulo.value; // Pegando os valores do html
    const duracao = Number(frm.inDuracao.value); // Pegando os valores do html

    const horas = Math.floor(duracao / 60); //obtem as horas
    const restoHoras = duracao % 60; //obtem os minutos

    resp1.innerText = titulo;
    resp2.innerText = `${horas} Horas e ${restoHoras} minutos`
})