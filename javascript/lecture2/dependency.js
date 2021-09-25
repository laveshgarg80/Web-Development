let minimist = require("minimist");
let inp = minimist(process.argv);

//node dependency.js --name="lavesh" --age=20
console.log(inp.name); //lavesh
console.log(inp.age); //20
