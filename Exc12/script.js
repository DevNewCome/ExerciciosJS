
const frm = document.querySelector('#frm');
const frutaValor = document.querySelector('#inFruta')
const numeroValor = document.querySelector('#inNumero')
const resp = document.querySelector('#resp');


frm.addEventListener('submit',(e)=>{
e.preventDefault();

fruta = frm.inFruta.value;
num = Number(frm.inNumero.value);
let resposta = '';


  console.log(fruta)
for(let i = 0; i < num; i++){
    resposta += fruta + '-';
} 

resp.innerText = resposta;
})


