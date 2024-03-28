const frm = document.querySelector('#frm');
const resp = document.querySelector('#resp');


frm.addEventListener('submit',(e)=>{
e.preventDefault();

let num = Number(frm.inNumero.value);

let simbolos = ''
for(i = 1; i<=num; i++){
    if(i % 2 == 1) {
        simbolos = simbolos + '*' // add a estrela na posicao impar
    } else {
        simbolos = simbolos + '-'
    }
}

resp.innerText = simbolos
frm.inNumero.value = ''


})