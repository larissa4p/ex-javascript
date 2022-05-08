function detector(dado) {
    if(typeof dado === 'string') {
        console.log("Este dado é uma string")
    } else if(typeof dado === 'boolean') {
        console.log("Este dado é um boleano")
    } else if (typeof dado === 'number') {
        console.log("Este dado é um number")
    }
}

detector(true)
detector(26)
detector("teste")