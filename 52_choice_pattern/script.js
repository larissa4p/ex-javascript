const reg = /\w+: (Larissa|Bia|Gabriel)/; // Nome: hdjksakjdha

console.log(reg.test("Nome: Larissa"));
console.log(reg.test("Nome: Hugo"))
console.log(reg.test("Nome: Bia"));