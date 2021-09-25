let arr = [];
let input = process.argv;
// 0     1      2 3 4 5 6 7
//node array.js 5 1 2 3 4 5
let sizeOfArray = input[2];

for (let i = 0; i < sizeOfArray; i++) {
  arr[i] = input[i + 3];
}
console.log(arr); //[ '1', '2', '3', '4', '5' ]
console.log(arr.length); //5
