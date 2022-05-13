class Dirigir {
    constructor(embreagem, freioDeMao) {
        this.embreagem = embreagem,
        this.freioDeMao = freioDeMao,
        this.acelerar = function() {
            console.log('Acelerou!')
        },
        this.frear = function() {
            console.log('Freou!')
        }
    }
}

let aluno = new Dirigir('Apertou', 'OK')

console.log(aluno)
aluno.acelerar()
aluno.frear()