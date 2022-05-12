function Violao(cordas, cor, marca) {
    this.cordas = cordas,
    this.cor = cor,
    this.marca = marca,
    this.tocar = function() {
        console.log("Braaaan")
    }
}

let v1 = new Violao(6, 'preto', 'giannini')
let v2 = new Violao(6, 'marrom', 'tagima')

console.log(v1)
console.log(v2)

v1.tocar()
v2.tocar()