class Caminhao {
    constructor(modelo, eixo, gasolina, consumo) {
        this.modelo = modelo;
        this.eixo = eixo;
        this.gasolina = gasolina;
        this.consumo = consumo
    }
    
    acelerar(ace) {
        let gasolinaConsumida = ace / this.consumo

        this.gasolina -= gasolinaConsumida
    }

    abastecer(l) {
        
        this.gasolina += l
    }

}

let caminhao = new Caminhao('FH', 9, 100,9) 

console.log(caminhao)

caminhao.acelerar(10)

console.log(caminhao)

caminhao.abastecer(20)

console.log(caminhao)