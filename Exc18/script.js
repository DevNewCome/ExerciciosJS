const resultado = document.querySelector('#resultado');
const frm = document.querySelector('#frm');

let medicos = [];

frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    adicionar();
})


frm.btnPesquisar.addEventListener('click',(e)=>{
    e.preventDefault();
    pesquisar();
})

frm.btnEspecialidade.addEventListener('click',(e)=>{
    e.preventDefault();
    especialidade();

})

frm.btnListar.addEventListener('click',(e)=>{
    e.preventDefault();
    listar();
})

function adicionar(nome,especialista){
    lista = ''
    nome = document.querySelector('#inNome').value;
    especialista = document.querySelector('#inEspecialista').value;
 
    if(nome === ''){
        alert('campo nome vazio')
        return
    }

    for(let i of medicos){
        if(i.nome === nome){
            alert('Nome já existente');
            return 
        }
    }
    medicos.push({nome,especialista})
    

    for(let i in medicos){
        lista += `Nome: ${medicos[i].nome} | Especialidade: ${medicos[i].especialista}\n`
    }
    resultado.innerText = lista
    console.log(medicos)
}

function pesquisar(nome){
    let lista = ''
    nome = prompt("digite o nome do medico");
        if(nome === ''){
            alert('campo nome vazio')
        }

        for(let i of medicos){
            if(nome === i.nome){
                lista = `Nome: ${i.nome} Especialidade: ${i.especialista}`
            }
        }
        resultado.innerText = lista;  
        console.log(medicos)
    }

    function especialidade(especialidade){
        especialidade = document.querySelector('#inEspecialista').value
        especialidade = prompt('Especialidade:')

        if(especialidade === ''){
            alert('campo nome vazio')
        }

        let filtrando = medicos.filter(esp => esp.especialista === especialidade);
        if(filtrando.length > 0){
           resultado.innerText = filtrando.reduce((acc, medico) =>{
            return `${acc} Nome: ${medico.nome} Especialidade: ${medico.especialista}\n`
           },'')
        }else{
            alert('Nao existe especialista com esse nome')
        }
    }

    function listar(){
        const lista = medicos.reduce((acc, medico)=>{
            return `${acc} Nome: ${medico.nome} Especialista: ${medico.especialista}\n`
        }, "")
        resultado.innerText =  lista
    }