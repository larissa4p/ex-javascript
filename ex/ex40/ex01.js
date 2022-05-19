let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("larissa_123"))
console.log(validarNomeUsuario.test("as"))
console.log(validarNomeUsuario.test("llllllllllllllllllllllllllllllllll"))