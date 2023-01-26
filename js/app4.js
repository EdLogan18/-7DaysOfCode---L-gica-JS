let frutas = []
let laticinios = []
let carnes = [] 
let doces = []
let bebidas = []

let item = prompt("Você deseja inserir algo  a sua lista de compras? Sim[s] ou Não[n]")
   while(item === "s"){
     
     let qItem = prompt(`Qual item você deseja inserir?`);
     let qCategoria = prompt(`Qual categoria "${qItem}" se encaixa?\n1 - Frutas\n2 - Laticínios\n3 - Carnes\n4 - Doces\n5 - Bebidas`);     
     
      if(qCategoria == 1){
        frutas.push(qItem)  
      }    
      else if(qCategoria == 2){
      laticinios.push(qItem)
        } 
      else if(qCategoria == 3){
      carnes.push(qItem)
        } 
      else if(qCategoria == 4){
      doces.push(qItem)
        } 
      else if(qCategoria == 5){
      bebidas.push(qItem)
      } 
      item = prompt("deseja adicionar outro item?[s] ou [n]?") 
      alert(`Lista de compras:\n\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n Carnes: ${carnes} \n Doces: ${doces}\n  bebidas: ${bebidas}`);    
    }

    alert("Fim da lista")  