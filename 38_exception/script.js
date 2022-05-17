function saudacao(nome) {
    if(typeof nome != 'string') {
        throw new Error("O parêmetro nome precisa ser string");
    } else {
        console.log(`Olá ${nome}`);
    }
}

saudacao("Larissa");
saudacao(5)

console.log("teste")