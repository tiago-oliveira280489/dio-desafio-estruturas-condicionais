// Declaração das variáveis
let nome = "Revoltado"
let qtdXP = 5500
let nivel = ""

// Estrutura condicional - verificação da qtdVida
if (qtdXP <= 1000){
    nivel = "Ferro"
}else if (qtdXP > 1000 && qtdXP <= 2000){
    nivel = "Bronze"
}else if (qtdXP > 2000 && qtdXP <= 5000){
    nivel = "Prata"
}else if (qtdXP > 5000 && qtdXP <= 7000){
    nivel = "Ouro"
}else if (qtdXP > 7000 && qtdXP <= 8000){
    nivel = "Platina"
}else if (qtdXP > 8000 && qtdXP <= 9000){
    nivel = "Ascendente"
}else if (qtdXP > 9000 && qtdXP <= 10000){
    nivel = "Imortal"
}else{
    nivel = "Radiante"
}

// Mensagem de saída
console.log("O herói de nome " + nome + " está no nível de " + nivel)