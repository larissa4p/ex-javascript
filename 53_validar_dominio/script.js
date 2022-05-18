let validarDominio = /[?www.]\w+\.com|com.br/;  //www.google.com.br

console.log(validarDominio.test("www.google.com.br"))
console.log(validarDominio.test("www.facebook.com.br"))
console.log(validarDominio.test("www.teste"))
console.log(validarDominio.test("teste.com"))
console.log(validarDominio.test("www.instagram.com"))
console.log(validarDominio.test("horadecodar.com.br"))