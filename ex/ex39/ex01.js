const validandoIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validandoIp.test("128.0.0.1"))
console.log(validandoIp.test("8.8.8.8"))
console.log(validandoIp.test("192.168.0.62"))
console.log(validandoIp.test("128.50.0.1"))