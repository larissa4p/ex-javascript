class Pai {
    constructor(oculos) {
        this.oculos = oculos;
    }
}

let neto = new Pai(1);

console.log(neto.oculos)

class Filho extends Pai{
    constructor(oculos, cabelo) {
        super(oculos, oculos)
        this.cabelo = cabelo
    }
}

let neto2 = new Filho(2, 'Preto')

console.log(neto2.cabelo)