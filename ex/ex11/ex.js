let idade = 17;
let cnh = false;

if(idade >= 18 && cnh == true) {
    console.log(`Sua idade é de ${idade} anos e POSSUI CNH `)
} else if (idade >= 18 && cnh == false) {
    console.log(`Sua idade é de ${idade} e NÃO POSSUI CNH`)
} else if (idade < 18 && cnh == false) {
    console.log(`Sua idade é de ${idade} anos e AINDA NÃO POSSUI CNH`)
}