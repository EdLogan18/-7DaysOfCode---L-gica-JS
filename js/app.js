alert  ("Olá, como vai !!!")

const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual a sua idade?")
const ling = prompt("Qual linguagem de programação você está estudando?")
const msg = `Olá ${nome} !. Você tem ${idade} anos e está estudando ${ling}.` 

alert (msg)

const gostar =  prompt("Você está gostando do  curso? Responda 1 para SIM e 2 para NÃO.")

if(gostar == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
}else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}