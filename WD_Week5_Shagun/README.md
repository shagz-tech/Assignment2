# 💰 Expense Tracker — Week 5 JavaScript Project

---

## ✅ Task 1: Project Planning

**Project Title:** Expense Tracker

**Project Objective:**  
To build a simple web application that helps users track their daily 
expenses, categorize them, and view their total spending in real time.

**Target Users:**  
Students and individuals who want to monitor their personal expenses.

**Main Features:**
- Add new expenses with title, amount, and category
- Delete expenses
- Filter expenses by category
- View total expense amount dynamically
- Real-time updates using DOM manipulation

**Technologies Used:** HTML5, CSS3, JavaScript (ES6)

**Description:**  
This Expense Tracker allows users to add expenses with a title, amount, 
and category. All expenses are displayed in a list, and the total amount 
updates automatically. Users can filter expenses by category and delete 
any entry, making it an interactive tool to manage personal finances.

---

## ✅ Task 6: Project Documentation & Reflection

**Project Overview:**  
The Expense Tracker is a JavaScript-based web application that allows 
users to add, view, filter, and delete their daily expenses. Each expense 
consists of a title, amount, and category, and the application dynamically 
calculates and displays the total amount spent based on the selected 
filter. This project was built using HTML for structure, CSS for styling, 
and JavaScript for all interactive functionality.

**Features Implemented:**
1. **Add Expense** – Users can add a new expense by entering a title, amount, 
   and selecting a category from a dropdown.
2. **Delete Expense** – Each expense entry has a delete button to remove it 
   from the list.
3. **Category Filter** – Users can filter expenses by category (Food, Travel, 
   Shopping, Bills, Other) or view all expenses.
4. **Dynamic Total Calculation** – The total expense amount updates 
   automatically whenever an expense is added, deleted, or the filter 
   is changed.
5. **Form Validation** – The form checks that the title and amount fields 
   are properly filled before adding an expense.

**Technologies Used:**  
HTML5, CSS3, and JavaScript (ES6). No external libraries or frameworks 
were used, keeping the project lightweight and beginner-friendly.

**JavaScript Concepts Used:**  
Functions (`addExpense`, `deleteExpense`, `calculateTotal`, `renderExpenses`), 
Arrays (storing expenses, using `filter` and `reduce` methods), Objects 
(each expense stored as an object with title, amount, and category 
properties), DOM Manipulation (creating and removing list elements 
dynamically), and Events (form submit event, button click event, and 
dropdown change event).

**Challenges Faced:**  
One challenge was ensuring the total amount updated correctly when 
filtering by category, since the total needed to reflect only the 
filtered expenses rather than all expenses. Another challenge was 
handling form validation to prevent empty or invalid entries from 
being added.

**Solutions Implemented:**  
To solve the filtering issue, the `calculateTotal` function was applied 
to the filtered array instead of the full expense array, ensuring the 
total always matched what was displayed. For validation, conditional 
checks were added inside the form submit event to verify the title 
was not empty and the amount was greater than zero before adding the 
expense.

**What I Learned:**  
This project helped me understand how functions, arrays, and objects 
work together in a real application. I also learned how to manipulate 
the DOM dynamically and handle multiple types of events like form 
submission and dropdown changes.

**Future Improvements:**  
In the future, this project could be improved by adding local storage 
to save expenses even after refreshing the page, adding an edit feature 
for existing expenses, and including charts to visually represent 
spending by category.

---

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📂 Project Structure

WD_Week5_Shagun/

├── index.html

├── style.css

├── script.js

└── README.md


---

## 👤 Author

**Shagun Gupta**  
B.Tech CSE Student

---

⭐ *Part of the Web Development Internship — Week 5 Project Submission*