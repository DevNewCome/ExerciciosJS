
console.log('informe os alunos. Após, digite fim no nome para sair')
const alunos = [];

do{
    const nome = prompt('Nome:')
    if (nome === 'sair'){
        break;
    }
    const nota = Number(prompt('Nota'));
    alunos.push({nome,nota})
}while(true)

let maiorNota = alunos.reduce((a,b) => Math.max(a,b.nota),0)
console.log('Maior nota:' + maiorNota);

if(maiorNota >= 7){
    let  destaques = alunos.filter(aluno => aluno.nota == maiorNota)
        for(i of destaques){
            console.log(`${i.nome}`)
        }
}else{
    console.log('Não há alunos em destaque na turma')
}