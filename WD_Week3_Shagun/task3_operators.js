// Task 3: Operators
let a = 15;
let b = 4;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** 2);

let score = 10;
score += 5;
console.log("After += 5:", score);
score -= 3;
console.log("After -= 3:", score);
score *= 2;
console.log("After *= 2:", score);
score /= 4;
console.log("After /= 4:", score);

console.log("a == b:", a == b);
console.log("a === b:", a === b);
console.log("a != b:", a != b);
console.log("a > b:", a > b);
console.log("a < b:", a < b);

let isLoggedIn = true;
let hasAccess = false;
console.log("AND:", isLoggedIn && hasAccess);
console.log("OR:", isLoggedIn || hasAccess);
console.log("NOT:", !isLoggedIn);

let counter = 5;
counter++;
console.log("Increment:", counter);

let lives = 3;
lives--;
console.log("Decrement:", lives);