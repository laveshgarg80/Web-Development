//create an array
let arr = [];

for (let i = 0; i < 5000000; i++) {
  arr.push(i);
}

let str = arr.join("\n");
let fs = require("fs");
fs.writeFileSync("./large.txt", str, "utf-8");
fs.appendFileSync("./large.txt", str, "utf-8");
fs.appendFileSync("./large.txt", str, "utf-8");
fs.appendFileSync("./large.txt", str, "utf-8");
