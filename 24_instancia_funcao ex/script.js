function onibusEscolar(cor,alunos,passagens) {
    let onibus = Object.create({});
    onibus.cor = cor;
    onibus.alunos = alunos;
    onibus.passagens = passagens;
    onibus.partir = function() {
        console.log('Pronto Para Seguir Viagem!');
    }
    return onibus;
}

let prof = onibusEscolar('Amarelo', 45, 300);

console.log(prof);

prof.partir()