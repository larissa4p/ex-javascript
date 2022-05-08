function soma (a,b) {

    if(a === undefined || b === undefined) {
        console.log("Esta função precisa ter os dois argumentos")
    } else {
        return a + b
    }
}

console.log(soma(1))

console.log(soma(1,2))

function saudacao(nome, idade) {
    if(idade === undefined) {
        console.log("Olá " + nome )
    } else {
        console.log("Olá " + nome + "você tem " + idade + " anos")
    }
}

saudacao("Matheus")

saudacao("Igor", 29)

function soma(suco, hamburguer) {
    if(suco === undefined || hamburguer === undefined) {
        console.log("Preciso que defina o seu Cardápio")
    } else {
        console.log("O seu suco foi de " + suco + " e seu hamburguer de " + hamburguer + ", Obrigado")
    }
}

soma("Abacaxi", "Picles")