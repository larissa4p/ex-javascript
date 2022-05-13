class Endereço {
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }

}

let endereço = new Endereço("Qr 414", "Samambaia", "Brasilia", "DF")

console.log(endereço)

endereço.novaRua = "QR 412";

console.log(endereço)

endereço.novaCidade = "Distrito Federal"

console.log(endereço)