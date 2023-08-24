let age = 15;

if (age <= 17) {
  console.log("Underage");
} else if (age <= 65) {
  console.log("Insurable");
} else {
  console.log("Out of range");
}

//condition ? trueExpression : falseExpression;
const output =
  age <= 17 ? "Underage" : age <= 65 ? "Insurable" : "Out of range";
console.log(output);

let age2 = 45;
const output2 =
  age2 <= 17 ? "Underage" : age2 <= 65 ? "Insurable" : "Out of range";
console.log(output2);

let age3 = 80;
const output3 =
  age3 <= 17 ? "Underage" : age3 <= 65 ? "Insurable" : "Out of range";
console.log(output3);
