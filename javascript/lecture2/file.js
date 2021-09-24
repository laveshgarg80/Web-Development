let fs = require("fs");
let f1 = "./f1.txt";
let f2 = "./f2.txt";
let readedText = fs.readFileSync(f1, "utf-8");
fs.writeFileSync(f2, readedText, "utf-8");
