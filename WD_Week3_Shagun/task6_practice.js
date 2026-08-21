// Task 6: Practice Programs
function isPalindrome(num) {
  const original = num;
  let reversed = 0;
  let temp = num;
  while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  console.log(original, original === reversed ? "is a Palindrome" : "is not a Palindrome");
}
isPalindrome(121);

function simpleCalculator(num1, num2, operator) {
  let result;
  if (operator === "+") result = num1 + num2;
  else if (operator === "-") result = num1 - num2;
  else if (operator === "*") result = num1 * num2;
  else if (operator === "/") result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
  console.log(num1, operator, num2, "=", result);
}
simpleCalculator(10, 5, "+");

function countVowels(word) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) count++;
  }
  console.log("Vowels in", word, ":", count);
}
countVowels("JavaScript");

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}