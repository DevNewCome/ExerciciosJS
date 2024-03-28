
const produto = prompt('produto:')
const num = Number(prompt('N de etiquetas: '))

for (let i = 1; i <= num/2; i++){
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if(num % 2 == 1) {
    console.log(produto)
}