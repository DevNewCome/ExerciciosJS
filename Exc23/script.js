let clientes = [];

do{
    let nome = prompt('Nome cliente');
        if(nome === 'sair'){
            break;
        }
    let idade = prompt('idade cliente')
    clientes.push({nome,idade})
    console.log(clientes)
}while(true)

console.log('Fila de velhos')
let filaPref = clientes.filter(cliente => cliente.idade >= 60)
    filaPref.forEach((fila, i) =>{
        console.log(`${i + 1}. ${fila.nome}\n` )
    })

    console.log('fila normal');
    let filaNormal = clientes.filter((idade => idade.idade < 60))
    filaNormal.forEach((fila, i) =>{
        console.log(`${i + 1}. ${fila.nome}\n`)
    })

    