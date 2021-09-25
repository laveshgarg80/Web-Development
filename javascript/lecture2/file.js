//you do not have to install fs package
//fs package is already in the node for our usage
let fs = require("fs");
let readedText = fs.readFileSync("./f1.txt", "utf-8");
fs.writeFileSync("./f2.txt", readedText, "utf-8");
