const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("asd"))
console.log(nottoaz.test("123 as"))
console.log(nottoaz.test("asdadasdadasd"))

const az = /[a-z]/;

console.log(az.test("asdasd123asdasd"))


