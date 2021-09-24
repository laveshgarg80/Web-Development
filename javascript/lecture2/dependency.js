let minimist = require("minimist");
let scanner = minimist(process.argv);
//node dependency.js --name="lavesh" --age=20
//console.log(scanner);
console.log(scanner.name);
console.log(scanner.age);
