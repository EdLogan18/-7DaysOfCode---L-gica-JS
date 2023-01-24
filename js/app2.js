let linguagem
const novasLinguagens = [ ]
let contador = 0

alert  ("Olá, como vai!!!")

let area = prompt("Você gostaria de estudar Front-End ou Back-End? Escolha 1 para Front-End e 2 para Back-End")

    if(area == 1){
        let front1 =  prompt("Gostaria de React(1) ou Vue(2)")
            if(front1 == 1)  {
                linguagem = "React"                
            }else{
                linguagem = "Vue"               
            }    
    }if(area == 2){
        let back1 =  prompt("Gostaria de C++(1) ou Java(2)")  
        if(back1 == 1){
            linguagem = "C++"
        }else{
            linguagem = "Java"
        }
    }

let carreira = prompt("Continuar carreira em "+ linguagem +", digite 1, ou gostaria de se tornar FullStack, digite 2")
    if(carreira ==  1){
        alert("Você se especializará em "+ linguagem +". Parabéns!!!")
    }else{
        alert("Você se tornará um desenvolvedor FullStack. Parabéns!!!")
    }

    let aprenderMais =  prompt(" Gostaria de aprender mais linguagens? [s] ou [n].")
        if(aprenderMais === "s"){
            while(aprenderMais === "s"){
                novasLinguagens.push(prompt("Quais linguagens?"))

             aprenderMais = prompt("Alguma outra linguagem [s] ou [n]?")  
             if(aprenderMais != "s"){
                alert("Você se interessou por: " + novasLinguagens)
             } 
            }
        }

alert("Muito obrigado  por estudar com a gente!!!")

alert("Fim")
