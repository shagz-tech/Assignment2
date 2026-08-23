// 1. Function Declaration
function calculateTotalPrice(price, quantity) {
    return price * quantity;
}

// 2. Function with Multiple Parameters
function calculateMarks(marks1, marks2, marks3) {
    let total = marks1 + marks2 + marks3;
    let percentage = (total / 300) * 100;
    return percentage;
}

// 3. Function with Default Argument
function greetUser(name = "Guest") {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// 4. Arrow Function
const calculateDiscount = (price, discountPercent) => {
    return price - (price * discountPercent) / 100;
};

// 5. Arrow Function - Simple Add
const addNumbers = (a, b) => a + b;

// Function Calls
console.log("Total Price:", calculateTotalPrice(150, 3));
console.log("Percentage:", calculateMarks(85, 90, 78).toFixed(2) + "%");
console.log(greetUser("Shagun"));
console.log(greetUser());
console.log("Discounted Price:", calculateDiscount(1000, 10));
console.log("Sum:", addNumbers(5, 10));