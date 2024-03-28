let saques = []

do{
    let valor = Number(prompt('Valor para saque'))
        if(valor === 0){
            break;
        }
        saques.push(valor);
        if(valor % 10 === 0){
            console.log('sacado com sucesso')
        }else{
            console.log('estamos com a disponibilidade de apenas notas de dez reais')
        }
        console.log(saques)
}while (true)

let valoresSacados = saques.filter((valor => valor % 10 === 0))
    listarValores = saques.forEach((item, i) =>{
        console.log(`${i} - Valor:${item}\n`)
    })

    let somaTotal = valoresSacados.reduce((acc,atual) =>{
        return acc + atual
    },0)
        console.log(somaTotal.toFixed(2))

        let saquesInvalidos = saques.length - valoresSacados.length
        console.log(`tentativas invalidas de saque ${saquesInvalidos}`)