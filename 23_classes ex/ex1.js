let cachorro = {
    patas: 4,
    coleira: 1,
    raca: 'Maltês',
    cor: 'Cinza',
    latir: function() {
        console.log('Auu Au')
    },
    correr: function() {
        console.log('Run!')
    }
}

let srd = Object.create(cachorro)
srd.raca = 'SRD'
console.log(srd.raca)

cachorro.latir()
cachorro.correr()