// Fazer uma estrutura if/else para verificar se o usuário pode dirigir; Armazene em var algumas informações sobre o usuário: idade, cnh; Maior de 18 e que nao possuir CNH, exiba uma mensagem; Maior de 19 e tem CNH, exiba msg; Menor de 18, exiba outra msg;

let usuarioAmanda = 18
let cnhA = true

if(usuarioAmanda >= 18 && cnhA == true) {
    console.log('Pode Dirigir!')
} else if(usuarioAmanda >= 18 && cnhA == false){
    console.log('Não pode Dirigir!')
} else {
    console.log('Banco do Passageiro')
}

let idade = 17;
let cnh = false;

if(idade >= 18 && cnh == true) {
    console.log(`Sua idade é de ${idade} anos e POSSUI CNH `)
} else if (idade >= 18 && cnh == false) {
    console.log(`Sua idade é de ${idade} e NÃO POSSUI CNH`)
} else if (idade < 18 && cnh == false) {
    console.log(`Sua idade é de ${idade} anos e AINDA NÃO POSSUI CNH`)
}
