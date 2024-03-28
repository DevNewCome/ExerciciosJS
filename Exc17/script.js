const frm = document.querySelector("form")       // obtém elementos da página
const resp = document.querySelector("pre")

let listaCarros = ''
let carros = [];


frm.addEventListener("submit", (e) => {    // "escuta" evento submit do form 
    e.preventDefault()                       // evita envio do form
    const modelo = frm.inModelo.value        // obtém dados do form
    const preco = Number(frm.inPreco.value)
    carros.push({ modelo, preco })           // adiciona dados ao vetor de objetos
    frm.inModelo.value = ""                  // limpa campos do form
    frm.inPreco.value = ""
    frm.inModelo.focus()                     // posiciona cursor em inModelo
    // dispara um evento de click em btListar (equivale a um click no botão na página)
    frm.btListar.dispatchEvent(new Event("click"))
  })

  frm.btListar.addEventListener("click", () => {  // "escuta" clique em btListar 
    if (carros.length == 0) {                     // se tamanho do vetor é igual a 0
      alert("Não há carros na lista")
      return
    }
    // método reduce() concatena uma string, obtendo modelo e preço de cada veículo
    
    const lista = carros.reduce((acumulador, carro)=>{
        return  acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n"
    }, "")
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
  })

  frm.btFiltrar.addEventListener('click',(e)=>{
    e.preventDefault();
    const maximo = Number(prompt('Qual o valor maximo que o cliente deseja pagar?'));

        if(maximo === 0){
            return
        }
        
        let carrosFilter = carros.filter((valor)=>{
          return valor.preco <= maximo
        })
        if(carrosFilter.length === 0){
            alert('não há veiculos com esse valor')
            return
        }
        let lista = ''
        for(const carro of carrosFilter){
            lista += `${carro.modelo} - RS${carro.preco.toFixed(2)}\n`
        }
        resp.innerText = `Carros até ${maximo.toFixed(2)}\n ${'-'.repeat()}\n${lista}`
  })

  frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt("Qual o percentual de desconto: "))
    if (desconto == 0 || isNaN(desconto)) {    // se não informou ou valor inválido
      return                                   // ... retorna
    }
    const carrosDesc = carros.map(aux => (
      {
      modelo: aux.modelo,
      preco: aux.preco - (aux.preco * desconto / 100)
      }   
    ))
    
    
    let lista = carrosDesc.reduce((acc, carro) => {
      return  acc + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n"
    }, "")
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
  })
  

 