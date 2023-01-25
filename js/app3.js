const numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);

    for(let i=2; i>=0;i--){
        
        let descubra = prompt ("Digite um numero de 0 a 10")    
            if(descubra == numero){
                alert("Parabéns!!! Você acertou!!!")
                break
            }
            if(i == 0){
                alert("Você errou. Infelizmente você não tem mais tentativas.")
                alert("O número a ser descoberto era o "+ numero +" .")
                break
           
            }else{
                alert("Você errou!!! Você tem apenas mais "+ i + " chances para tentar acertar.")
            }
    }

alert("Adeus. Thanks for Playing!")