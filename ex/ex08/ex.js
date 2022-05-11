// Crie uma constante com o seu nome como valor; Depois uma estrutura if que verifica se o seu nome é o que está na constante; Se estiver, emita uma mensagem de saudação com console.log();

const nome = 'Vanessa'

if(nome === 'Vanessa') {
    console.log(`Olá ${nome}, bem vinda`)
}

const nomeM = 'Marcelo' 

if(nomeM === 'marcelo') {
    console.log(`Olá ${nomeM}, bem vindo`)
} else {
    console.log('O seu nome não está na lista')
}