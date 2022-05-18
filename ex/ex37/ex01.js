const soString = /\d+ID\b/;

console.log(soString.test("321321231ID"))
console.log(soString.test("987897")) 
console.log(soString.test("dasdada")) 
console.log(soString.test("adsadID")) 
console.log(soString.test("ID")) 
console.log(soString.test("55ID"))