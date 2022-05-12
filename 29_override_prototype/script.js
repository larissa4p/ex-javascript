class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
    latir() {
        console.log("Au au")
    }

}

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.patas = 4;
let labrador = new Cachorro('Labrador', 4, 'Amarelo');

console.log(labrador)