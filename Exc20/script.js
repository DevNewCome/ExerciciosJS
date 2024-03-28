let resp = document.querySelector('.resp')
let frm  = document.querySelector('.frm')

let criancas = []

frm.addEventListener('submit',(e)=>{
    e.preventDefault();

let nome = frm.inNome.value;
let idade = frm.inIdade.value;

criancas.push({nome, idade})
console.log(criancas)
frm.btListar.dispatchEvent(new Event('click'))
})

frm.btListar.addEventListener('click',(e)=>{
    e.preventDefault();

 let lista = '';
 for(const crianca of criancas){
    lista+= `${crianca.nome} ${crianca.idade}\n`
 }
 resp.innerText = lista
    })

frm.btResumir.addEventListener('click',()=>{
   if(criancas.length === 0){
      alert('Não há crianças na lista')
      return
   }

   const copia = [...criancas]
   copia.sort((a,b) => a.idade - b.idade)
   let resumo = '';
   let aux = copia[0].idade;
   let nomes = [];

         for(const crianca of copia){
            const {nome, idade} = crianca

            if(idade == aux){
               nomes.push(nome)
            }else{
               resumo+= `${aux} anos ${nomes.length} criancas`
               resumo+= ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
               resumo+= "(" + nomes.join(", ") + ")\n\n"
               aux = idade;
               nomes = []
               nomes.push(nome)
            }
         }
         resumo+= `${aux} anos ${nomes.length} criancas`
         resumo+= ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
         resumo+= "(" + nomes.join(", ") + ")\n\n"
         resp.innerText = resumo
})

