for (i = 1; i <= 10; i++) {
  console.log(i);
}

for (j = 10; j >= 1; j--) {
  console.log(j);
}

let x = 2;
let loopCounter = 0;
while (x < 10000) {
  x = x ** 2;
  loopCounter++;
  console.log("x: ", x);
  console.log("Loop Counter: ", loopCounter);
}
