const frm = document.querySelector('#frm')
const resp = document.querySelector('#resp')

frm.addEventListener('submit',(e)=>{
e.preventDefault();

const num = Number(frm.inNumero.value);
let numDivisores = 0; //Declara inicializador

for (i = 1; i <= num; i++){ //Percorre todos os divisores possiveis
    if (num % i == 0){ //verifica se o numero q esta sendo percorrido é divisor de num
        numDivisores++; // se for, incrementa
    }
}

if(numDivisores == 2){
    resp.innerText = `${num} é Primo \nNumero de divisores: ${numDivisores}`
} else{
    resp.innerText = `${num} não é Primo \nNumero de divisores: ${numDivisores}`
}
})