btnLogin = document.querySelector('#loginBtn')
btnCriar = document.querySelector('#criarBtn')
btnSair = document.querySelector('#btnSair')
btnListar = document.querySelector('#btnListar')

let usuarios = []
let online = false


btnLogin.addEventListener('click',(e)=>{
    e.preventDefault();

   let nomeUsuario = document.querySelector('#nomeUsuario').value
   let senhaUsuario = document.querySelector('#senhaUsuario').value

 if(usuarios.length === 0){
    alert('não há contas cadastradas')
 }

  for(let i = 0; i < usuarios.length; i++){
    if(nomeUsuario === usuarios[i].nomeUsuario && senhaUsuario === usuarios[i].senhaUsuario){
        console.log('conta  encontrada')
        online = true
            if(online === true){
               let staffHide = document.querySelector('.containerStaff')
               staffHide.classList.remove('hide')
               let containerLogin = document.querySelector('.containerLogin')
               containerLogin.classList.add('hide')
               let nomePosLogin  = document.querySelector('.user')
               nomePosLogin.innerText = `Bem vindo ${nomeUsuario}`
            }
    }else{
        console.log('conta não encontrada')
    }
  }
console.log(online)
})

btnCriar.addEventListener('click',(e)=>{
    e.preventDefault();

   let nomeUsuario = document.querySelector('#nomeUsuario').value
   let senhaUsuario = document.querySelector('#senhaUsuario').value

   if(nomeUsuario === '' || senhaUsuario === ''){
    alert('preencha todos os campos')
    return
   }
   
  for(let i of usuarios){
    if(i.nomeUsuario === nomeUsuario){
      console.log('Conta já associada, tente outra')
      return
    }
  }

   usuarios.push({nomeUsuario, senhaUsuario})
   console.log(usuarios)
})

btnSair.addEventListener('click',(e) => {
    e.preventDefault();

    let staffHide = document.querySelector('.containerStaff')
     staffHide.classList.toggle('hide')
    let containerLogin = document.querySelector('.containerLogin')
    containerLogin.classList.toggle('hide')
    online = false
    console.log(online)
})





btnListar.addEventListener('click', (e) => {
  const container = document.querySelector('.containerStaff');
 // Clear the container before adding the updated list

    usuarios.forEach((item) => {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let btnVoltar = document.createElement('button')
        btnVoltar.innerText = 'voltar'
        li.innerText = item.nomeUsuario; // Assuming 'item' represents the user name or some property you want to display
        ul.append(li,btnVoltar);
        container.append(ul);
    });
});
