let inp = process.argv;
let n = parseInt(inp[2]);
for (let i = 1; i <= n; i++) {
  even(i);
}

function even(i) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
