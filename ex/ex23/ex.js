function textoAnalisado(dado) {
    if (dado.length > 10) {
        console.log("Texto muito longo")
    } else {
        console.log("Texto dentro do limite")
    }
    console.log(dado.length)
}

textoAnalisado("Larissa Bessa de Vilhena Coelho")
textoAnalisado("testando")
textoAnalisado("aaa")