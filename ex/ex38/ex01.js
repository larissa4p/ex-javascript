const marcas = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(marcas.test("Marca: Nike"));
console.log(marcas.test("Marca: Adadas"));
console.log(marcas.test("Marca: Pumaa"));
console.log(marcas.test("Marca: Asics"));
console.log(marcas.test("Marca: Naique"));

const mercado = /Produto: (Café|Leite|Frutas|Carnes)/;

console.log(mercado)
console.log(mercado.test("Produto: Café"));
console.log(mercado.test("Produto: Leite"));
console.log(mercado.test("Produto: Uva"));
console.log(mercado.test("Produto: Oléo"));