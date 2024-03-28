
const form = document.querySelector('.frm');
const resp = document.querySelector('pre')
const respNome = document.querySelector('span')
const pacientes = []

form.addEventListener('submit',(e)=>{
    e.preventDefault();

const nome = form.inPaciente.value;
pacientes.push(nome);
let lista = '';

    for(i = 0; i < pacientes.length; i++){
        lista += `${i+1}. ${pacientes[i]}\n`
    }

resp.innerText = lista;
form.inPaciente.value = '';
form.inPaciente.focus()

})

form.btUrgencia.addEventListener('click',()=>{
    if(!form.checkValidity()){
        alert('informe o nome do paciente a ser atendido em carater de urgencia')
        form.inPaciente.focus();
        return
    }
    const nome = form.inPaciente.value
    pacientes.unshift(nome) /// unshit adc no inicio 
    let lista = ''

    pacientes.forEach((paciente, i) => {
        lista += `${i + 1}. ${paciente}\n`
        resp.innerText = lista;
        form.inPaciente.value = '';
        form.inPaciente.focus();
    })
})

form.btAtender.addEventListener('click',(e)=>{
    if (pacientes.length === 0){
        alert('nao há pacientes')
        form.inPaciente.focus()
        return
    }

    const atender = pacientes.shift() // tira o primeiro da lista
    respNome.innerText = atender;
    let lista = '';
    pacientes.forEach((paciente, i) => {
        lista += `${i + 1}. ${paciente}\n`
    })
    resp.innerText = lista;
})