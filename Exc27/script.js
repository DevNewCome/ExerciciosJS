const resultado = document.querySelector('.resultado')
let estudantes = [];


function adicionar(){
    let nome = document.querySelector('#nomeCandidato').value
    let nota = document.querySelector('#notaCandidato').value
    let lista = ''
    estudantes.push({nome, nota})
    console.log(estudantes)

    for(let estudante of estudantes){
        lista+= ` - Nome: ${estudante.nome} ----- Nota: ${estudante.nota}\n`
    }
    resultado.innerText = lista
}

function aprovados(){
    if(estudantes.length === 0){
        alert('cadastre estudantes para continuar')
        return
    }
    let qntAcertos = prompt('Digite a quantidade de acertos')

    let aprovados = estudantes.filter(acertos => acertos.nota >= qntAcertos)
    console.log(aprovados)
    let lista = ''
        for(let i of aprovados){
            lista+= `Aprovados: \n -Nome: ${i.nome} ------ ${i.nota}\n`
        }
        resultado.innerText = lista

}