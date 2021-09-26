//task1 = read content from a file
//task2 = count all the even numbers from 1 to 100

console.log("task 1 is about started");

let fs = require("fs");
fs.readFile("./f1.txt", "utf-8", function (error, data) {
  console.log(error);
  console.log(data);
  console.log("task 1 is finished");
});

console.log("task 2 is about to start");

let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    count++;
  }
}
console.log(count);

console.log("task 2 is finished");
