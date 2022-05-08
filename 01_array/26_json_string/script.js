let  pessoa = {
    "nome": "Fernanda",
    "idade": 34,
    "profissao": "Programadora",
    "hobbies": ["Video game", "Violão", "Dirigir"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)
// console.log(pessoaTexto.nome);

let pessoaJSON = JSON.parse(pessoaTexto)

console.log(pessoaJSON)

console.log(pessoaJSON.hobbies[0])