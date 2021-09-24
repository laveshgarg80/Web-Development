//output
console.log("Hello Javascript");

//variable
let a = 10; //integer
let b = "10"; //string

//input
let arg = process.argv;
//remember input taken by process.argv is always in string format
//to convert string into integer we have to use  parseInt()
let i = parseInt(arg[2]);
//arg[0] contains node
//arg[1] contains file name

//if else
let age = 10;
if (age == 10) {
  console.log("yes");
} else {
  console.log("no");
}

//for loop
for (let i = 0; i < 5; i++) {
  console.log("lavesh");
}
