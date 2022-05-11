// Armazene a velocidade de um carro em uma variável, com o número que desejar; Fazer estrutura if/else que verifica a velocidade; 80 é a permitida;

let vel = 70;

if(vel > 80){
    console.log(`MULTADO! Velocidade Máxima Permitida 80km. Sua velocidade é de ${vel} km/h`)
} else {
    console.log(`Não Multado. Sua velocidade é de ${vel} km/h`)
}

let caminhao = 81

if(caminhao > 80) {
    console.log(`MULTADO! Sua velocidade é de ${caminhao} km/h`)
} else {
    console.log('TUDO OK!')
}