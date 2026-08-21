// Task 4: Conditional Statements
function checkNumberSign(num) {
  if (num > 0) console.log(num, "is Positive");
  else if (num < 0) console.log(num, "is Negative");
  else console.log(num, "is Zero");
}
checkNumberSign(12);
checkNumberSign(-7);

function checkEvenOdd(num) {
  if (num % 2 === 0) console.log(num, "is Even");
  else console.log(num, "is Odd");
}
checkEvenOdd(10);

function checkVotingEligibility(age) {
  if (age >= 18) console.log("Eligible to vote");
  else console.log("Not eligible to vote");
}
checkVotingEligibility(20);

function greaterOfTwo(x, y) {
  if (x > y) console.log(x, "is greater");
  else if (y > x) console.log(y, "is greater");
  else console.log("Both equal");
}
greaterOfTwo(25, 40);

function greatestOfThree(x, y, z) {
  if (x >= y) {
    if (x >= z) console.log(x, "is greatest");
    else console.log(z, "is greatest");
  } else {
    if (y >= z) console.log(y, "is greatest");
    else console.log(z, "is greatest");
  }
}
greatestOfThree(12, 45, 30);

function assignGrade(marks) {
  if (marks >= 90) console.log("Grade A");
  else if (marks >= 75) console.log("Grade B");
  else if (marks >= 60) console.log("Grade C");
  else if (marks >= 40) console.log("Grade D");
  else console.log("Fail");
}
assignGrade(95);