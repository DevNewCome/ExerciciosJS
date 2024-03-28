let btnAdd = document.querySelector('#btnAddAluno')
let aluno = []
let btnPesquisar = document.querySelector('#btnProcurarAluno')
let pesquisar = document.querySelector('#btnPesquisar')


btnAdd.addEventListener('click', (e)=>{
    e.preventDefault()

let nome = document.querySelector('#inNome').value
let serie = document.querySelector('#inSerie').value
let nota1 = parseFloat(document.querySelector('#inNota1').value)
let nota2 = parseFloat(document.querySelector('#inNota2').value)
let nota3 = parseFloat(document.querySelector('#inNota3').value)
let notaFinal = (nota1 + nota2 + nota3) / 3

if(nome === '' || serie === '' || nota1 === '' || nota2 === '' || nota3 === ''){
    alert('Preencha todos os campos')
    return
}

aluno.push({nome,serie,nota1,nota2,nota3, notaFinal: notaFinal.toFixed(2)})
console.log(aluno)

document.querySelector('#inNome').value = '';
document.querySelector('#inSerie').value = '';
document.querySelector('#inNota1').value = '';
document.querySelector('#inNota2').value = '';
document.querySelector('#inNota3').value = '';
})


btnPesquisar.addEventListener('click', (e) => {
    let containerPesquisa = document.querySelector('.container-pesquisa')
    let containerMenu = document.querySelector('.container-menu')
    e.preventDefault();
            containerPesquisa.classList.remove('hide')
            containerMenu.classList.add('hide')
    console.log('click')
});

function voltar(){
    let containerMenu = document.querySelector('.container-menu')
    let containerPesquisa = document.querySelector('.container-pesquisa')
    containerPesquisa.classList.add('hide');
    containerMenu.classList.remove('hide');
}

pesquisar.addEventListener('click', (e)=>{
    e.preventDefault();
    let nomeInput = document.querySelector('#nomePesquisa').value
    let nomePesquisado = aluno.filter((aluno) => {
        const alunoNome = aluno.nome.toLowerCase(); // Assuming each student object has a property 'nome'
        return alunoNome.includes(nomeInput);
    });
    if(nomePesquisado.length === 0){
        alert('Aluno não cadastrado')
    }
    let ul = document.createElement('ul')
    let scrollBox = document.querySelector('.scroll-box')

    nomePesquisado.forEach((aluno => {
        let li = document.createElement('li')
        li.innerText = `Nome: ${aluno.nome}\n Trabalho: ${aluno.nota1}\nSeminario: ${aluno.nota2}\nProva: ${aluno.nota3}\nNota Final: ${aluno.notaFinal}\n`;
        ul.appendChild(li)
    }))

   
   
 // Clear previous results
    scrollBox.appendChild(ul);
})