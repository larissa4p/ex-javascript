const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1518"));
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("asdasdasdasd"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("123123123123"))