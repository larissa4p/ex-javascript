let validandoDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2022]{4}/;

console.log(validandoDataNasc.test('05/02/2000'));
console.log(validandoDataNasc.test('5/2/2000'));
console.log(validandoDataNasc.test('05-02-2000'));
console.log(validandoDataNasc.test('05/02/00'));
console.log(validandoDataNasc.test('27/10/1995'));
console.log(validandoDataNasc.test('99/99/9999'));
console.log(validandoDataNasc.test('31/02/2010'));
