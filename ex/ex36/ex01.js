const validandoMinusculas = /\w+[a-z]/;

console.log(validandoMinusculas.test("TESTANDO"))
console.log(validandoMinusculas.test("testando"))

const validandoMaiuculas = /\w+[A-Z]/;

console.log(validandoMaiuculas.test("TESTANDO"))
console.log(validandoMaiuculas.test("testando"))