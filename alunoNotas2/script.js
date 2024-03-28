let cadastrados = []
let btnCadastro = document.querySelector('.btnCadastro')
let btnConsultaCadastro = document.querySelector('.btnConsulta')
let btnPesquisa = document.querySelector('.btnPesquisa')
let btnVoltar = document.querySelector('.btnVoltar')

btnPesquisa.addEventListener('click', pesquisa)
btnCadastro.addEventListener('click', criaCadastro)
btnConsultaCadastro.addEventListener('click', consultaCadastro)

function criaCadastro(){
    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value.toLowerCase()
    let cpf = document.querySelector('#cpf').value.toLowerCase()
    let telefone = document.querySelector('#telefone').value.toLowerCase()
    let endereco = document.querySelector('#endereco').value.toLowerCase()

        if(nome === '' || email === '' || cpf === '' || telefone === '' || endereco === ''){
            alert('Preencha todos os campos')
            return
        }

        cadastrados.push({nome, email, cpf, telefone, endereco})
        console.log(cadastrados)

        limpaCampos()
}

btnVoltar.addEventListener('click', ()=>{
    let removeHideCadastro = document.querySelector('.cadastros')
    let addHideHome = document.querySelector('.inputs')
    addHideHome.classList.toggle('hide')
    removeHideCadastro.classList.toggle('hide')
})

function consultaCadastro(){
    let removeHideCadastro = document.querySelector('.cadastros')
    let addHideHome = document.querySelector('.inputs')
    addHideHome.classList.toggle('hide')
    removeHideCadastro.classList.toggle('hide')
}



function pesquisa(){
   
    let input = document.querySelector('#inputPesquisa').value.toLowerCase()
    let usuario = cadastrados.find((usuario) => {
        return usuario.nome.includes(input);
    });

        if(usuario){
            document.querySelector('#nomeC').value = usuario.nome;
            document.querySelector('#emailC').value = usuario.email;                    document.querySelector('#cpfC').value = usuario.cpf;
            document.querySelector('#telefoneC').value = usuario.telefone;
            document.querySelector('#enderecoC').value = usuario.endereco;
        } else{
            alert('nao encontrado')
        }
        
    console.log(usuario)

}

const limpaCampos = () => {
    let nome = document.querySelector('#nome')
    let email = document.querySelector('#email')
    let cpf = document.querySelector('#cpf')
    let telefone = document.querySelector('#telefone')
    let endereco = document.querySelector('#endereco')

    nome.value = ''
    cpf.value = ''
    email.value = ''
    telefone.value = ''
    endereco.value = ''
}
