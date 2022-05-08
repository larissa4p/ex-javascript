function autoEscolaLarissa(idade) {
    if(idade <= 17) {
        console.log("Você não pode se matricular. Idade inferior à 18 anos!")
    } else {
        console.log(`Olá, bem vindo(a) à autoescola Larissa. Recebemos a sua matrícula, sua idade é de ${idade}`)
    }
}

autoEscolaLarissa(16)
autoEscolaLarissa(18)