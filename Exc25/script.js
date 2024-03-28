const resultado = document.querySelector('.resultado')
let times = [];


function adicionar(){
    let nomeTime = document.querySelector('#nomeClube').value;
    times.push({time:nomeTime});
    console.log(times)
    clean();
}

function clean(){
    let nomeTime = document.querySelector('#nomeClube')
    nomeTime.value = ''
}

function listar(){
    let lista = ''
    for(let i of times){
        lista+= `${i.time}\n`
    }
    console.log(lista)
    resultado.innerText = lista
}

function montarJogos(){
    let tam = times.length
        if(tam == 0 || (tam % 2 == 1)){
            alert('Deve haver número par de clubes/clubes incluídos')
            return
        }
        let lista = ''
        let ultimoTime = tam  - 1

       for(i = 0; i < tam / 2; i++){
            lista+= times[i].time + ' X ' + times[ultimoTime - i].time + '\n'
        }
        console.log(lista)
        resultado.innerText = lista
}