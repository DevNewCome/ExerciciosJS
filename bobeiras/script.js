let resp = document.querySelector('.resp')
let btnCadastrar = document.querySelector('#btnCadastrar')
let promotores = []
let btnPesquisa = document.querySelector('#btnPesquisa')

btnCadastrar.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('click')
let resposta = ''
let nome = document.querySelector('#inName').value  
let pis = document.querySelector('#inPis').value  
let data = document.querySelector('#inData').value
  
promotores.push({nome:nome, nis:pis, data:data}) 
console.log(promotores)
/*for (let i of promotores){
    resposta += `Nome: ${i.nome}\n PIS: ${i.nis}\n Data: ${i.data}\n`;
 }

 resp.innerText = resposta;

 console.log(promotores) */
})

btnPesquisa.addEventListener('click',(e)=>{
    e.preventDefault();

 let nome = document.querySelector('#inNomePesquisa').value   
    
 if(nome === ''){
    alert('Nome vázio')
    return
 }

let nomePesquisado = promotores.filter((promotor)=>{
    return promotor.nome === nome       
})
if(nomePesquisado.length === 0){
    alert('nao existe')
    return
}

let resultText = nomePesquisado.map((promotor)=>{
    return `Nome: ${promotor.nome}\nPIS/NIS: ${promotor.nis}\nData-inicio: ${promotor.data}\n`;
})
resp.innerText = resultText
console.log(resultText)    
})

// Function to update the resp element
function updateRespElement() {
    let resposta = '';
    for (let i of promotores) {
      resposta += `Nome: ${i.nome}\nPIS: ${i.nis}\nData: ${i.data}\n`;
    }

    resp.innerText = resposta;
    console.log(promotores);
  }

  // Edit button event listener
  btnEditar.addEventListener('click', () => {
    let nome = prompt('Digite o nome do promotor que deseja editar:');
    if (nome === null || nome.trim() === '') return;

    let promotorParaEditar = promotores.find((promotor) => {
      return promotor.nome === nome;
    });

    if (!promotorParaEditar) {
      alert('Promotor não encontrado.');
      return;
    }

    let novoNome = prompt('Digite o novo nome do promotor:');
    if (novoNome === null || novoNome.trim() === '') return;

    let novoPIS = prompt('Digite o novo PIS/NIS do promotor:');
    if (novoPIS === null || novoPIS.trim() === '') return;

    let novaData = prompt('Digite a nova data de início do promotor:');
    if (novaData === null || novaData.trim() === '') return;

    // Update the promotor data
    promotorParaEditar.nome = novoNome;
    promotorParaEditar.nis = novoPIS;
    promotorParaEditar.data = novaData;

    // Call the function to update the resp element with the updated data
    updateRespElement();
  });

