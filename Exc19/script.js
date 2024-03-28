let imovel = []
let quantidadeImovel = 0;
let opcao = ''


do{
     opcao = prompt(`Digite 1 Para cadastrar um imovel\n Digite 2 para listar os imóveis\n imoveis cadastrados: ${quantidadeImovel}`)
            switch(opcao){
                case '1':
                    let nomeProprietario = prompt('Digite o nome do proprietário')
                    let quantidadeQuartos = prompt('Digite a quantidade de quartos')
                    let quantidadeBanheiros = prompt('Digite a quantidade de banheiros')
                    let garagem = prompt('Possui garagem ?')
                        imovel.push({nomeProprietario, quantidadeQuartos, quantidadeBanheiros, garagem})
                        quantidadeImovel++
                    break;
                    case '2':
                        for(let i of imovel){
                            alert(`Proprietário:${i.nomeProprietario}\n Quartos:${i.quantidadeQuartos}\n Banheiros: ${i.quantidadeBanheiros}\n Garagem: ${i.garagem}`)
                        } 
                        opcao = prompt(`Digite 1 Para cadastrar um imovel\n Digite 2 para listar os imóveis`);
                        break;
                        default:
                            break;
            }
}while(opcao !== '3')