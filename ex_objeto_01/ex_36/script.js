class Banco {
    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }
}

let conta = new Banco(1000);

conta.depositar(5000)
console.log(conta.saldo)

conta.sacar(500)
console.log(conta.saldo)