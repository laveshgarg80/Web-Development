let inp = process.argv;
let arr = [];
let sizeOfArray = inp[2];

for (let i = 0; i < sizeOfArray; i++) {
  arr[i] = inp[i + 3];
}

console.log("size of array is = ", arr.length);
console.log(arr);
