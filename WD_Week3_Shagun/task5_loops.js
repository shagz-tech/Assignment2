// Task 5: Loops
for (let i = 1; i <= 10; i++) console.log(i);

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

let tableNumber = 7;
let multiplier = 1;
while (multiplier <= 10) {
  console.log(tableNumber + " x " + multiplier + " = " + (tableNumber * multiplier));
  multiplier++;
}

let sum = 0;
let count = 1;
while (count <= 50) {
  sum += count;
  count++;
}
console.log("Sum 1 to 50:", sum);

let n = 10;
do {
  console.log(n);
  n--;
} while (n >= 1);