const form = document.querySelector(".formAluno");
const resp1 = document.querySelector(".resp1");
const resp2 = document.querySelector(".resp2");


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    nomeAluno = form.nome.value;
    primeiraNota = Number(form.nota1.value);
    segundaNota = Number(form.nota2.value);
    total = (primeiraNota + segundaNota) /2;

    if(total >= 7){
        resp1.innerText = `Média das Notas ${total.toFixed(2)}`;
        resp2.style.color = "green";
        resp2.innerText = `Parabéns ${nomeAluno}! você foi aprovado (a)`;

    } else{
        resp1.innerText = `Média das Notas ${total.toFixed(2)}`;
        resp2.innerText = "Reprovado"
    }
})