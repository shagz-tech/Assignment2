// Array to store expense Objects
let expenses = [];

// DOM Elements
const expenseForm = document.getElementById("expenseForm");
const titleInput = document.getElementById("titleInput");
const amountInput = document.getElementById("amountInput");
const categoryInput = document.getElementById("categoryInput");
const filterCategory = document.getElementById("filterCategory");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

// Function: Add Expense
function addExpense(title, amount, category) {
    const newExpense = {
        id: Date.now(),
        title: title,
        amount: parseFloat(amount),
        category: category
    };
    expenses.push(newExpense);
}

// Function: Delete Expense
function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    renderExpenses(filterCategory.value);
}

// Function: Calculate Total
function calculateTotal(expenseArray) {
    return expenseArray.reduce((sum, expense) => sum + expense.amount, 0);
}

// Function: Filter Expenses by Category
function filterExpenses(category) {
    if (category === "All") {
        return expenses;
    }
    return expenses.filter(expense => expense.category === category);
}

// Function: Render Expenses (DOM Manipulation)
function renderExpenses(selectedCategory = "All") {
    expenseList.innerHTML = "";

    const filteredExpenses = filterExpenses(selectedCategory);

    if (filteredExpenses.length === 0) {
        const emptyMsg = document.createElement("li");
        emptyMsg.textContent = "No expenses found.";
        expenseList.appendChild(emptyMsg);
    } else {
        filteredExpenses.forEach(expense => {
            const li = document.createElement("li");

            const infoSpan = document.createElement("span");
            infoSpan.textContent = `${expense.title} - ₹${expense.amount} (${expense.category})`;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => deleteExpense(expense.id));

            li.appendChild(infoSpan);
            li.appendChild(deleteBtn);
            expenseList.appendChild(li);
        });
    }

    // Update Total (based on filtered view)
    totalAmount.textContent = calculateTotal(filteredExpenses).toFixed(2);
}

// Event: Form Submit
expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const amount = amountInput.value;
    const category = categoryInput.value;

    if (title === "" || amount === "" || amount <= 0) {
        alert("Please enter valid expense details!");
        return;
    }

    addExpense(title, amount, category);
    renderExpenses(filterCategory.value);

    // Reset form
    titleInput.value = "";
    amountInput.value = "";
});

// Event: Filter Change
filterCategory.addEventListener("change", () => {
    renderExpenses(filterCategory.value);
});

// Initial Render
renderExpenses();