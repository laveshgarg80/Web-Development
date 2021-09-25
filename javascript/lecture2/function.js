//given n
//we have to print all even numbers from 1 to n

let n = process.argv;
//node function.js 10
for (let i = 1; i <= n[2]; i++) {
  even(i);
}

function even(x) {
  if (x % 2 == 0) {
    console.log(x);
  }
}

//output
//2
//4
//6
//8
//10
