const descricaoConta = document.querySelector('#inDescricao');
const valorPagar = document.querySelector('#inValor');
const frm = document.querySelector('.formConta')
const resposta1 = document.querySelector('#resp1')
const resposta2 = document.querySelector('#resp2')

let resposta = ''
let numContas = 0;
let valTotal = 0


frm.addEventListener('submit', (e)=> {
    e.preventDefault();


const descricao = frm.inDescricao.value;
const valor = Number(frm.inValor.value);

numContas++;
valTotal += valor;
resposta = resposta + descricao + " - R$ " + valor.toFixed(2) + '\n'
resposta1.innerText = resposta;
resposta2.innerText = `${numContas} Conta(s) - Total R$ ${valTotal}`

frm.inDescricao.value = ''
frm.inValor.value = ''
frm.inDescricao.focus();
})

