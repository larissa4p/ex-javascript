const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("larissa@gmail.com"));
console.log(validarEmail.test("larissa@gmail"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("larissa@gmail.com.br"));
console.log(validarEmail.test("gmail@gmail.gmail.gmail."));