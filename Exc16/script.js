const frm = document.querySelector('#frm');
const respErros = document.querySelector('#outErros');
const respChances = document.querySelector('#outChances');
const dicas = document.querySelector('#outDica')
const btn = document.querySelector('#btSubmit');

let erros = [];
let chances = 6



function sorteamento(){
    const sorteado = Math.floor(Math.random() * 100 + 1) // Sorteia de 1 a 100 aleatoriamente
        return sorteado;
}


frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const numero = frm.inNumber.value;
        if (sorteamento() === numero){
            dicas.innerText = 'parabens, acertou numero sorteado:' + sorteamento();
            frm.btSubmit.disable = true;
            frm.btNovo.className = 'exibe'
        } else{
            if (erros.includes(numero)){// se o numero existe no vetor de erros (já apostou)?
                alert(`Você já apostou o numero ${numero} tente outro`);
            }else{
                erros.push(numero)
                const numErros = erros.length
                const numChances = chances - numErros;

                respErros.innerText = `${numErros} (${erros.join(", ")})`
                respChances.innerText = `${numChances}`
                    
                if(numChances === 0){
                    alert('Suas chances acabaram')
                    btn.disabled = true;
                    frm.btNovo.className = 'exibe'
                    dicas.innerText = 'Game Over! Número sorteado foi: ' + sorteamento();
                }else{
                    const dica = numero < sorteamento() ? "maior" : "menor";
                    dicas.innerText = `Dica: tente um número ${dica} que ${numero}`;
                    
                }
            }
        }
    frm.inNumber.value = '';
    frm.inNumber.focus();    
})


frm.btNovo.addEventListener('click',(e)=>{
    e.preventDefault()
    sorteamento()
   location.reload()
   btn.disabled = false;
   chances = 6;
   respErros.innerText = 0;
   respChances.innerText = chances;
   dicas.innerText = `Dica: tente um número entre 1 e 100`;
})

