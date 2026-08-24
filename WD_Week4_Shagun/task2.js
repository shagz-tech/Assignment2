// 1. Creating an Array
let students = ["Aman", "Riya", "Karan", "Sneha"];
console.log("Original Array:", students);

// 2. Accessing Array Elements
console.log("First Student:", students[0]);
console.log("Last Student:", students[students.length - 1]);

// 3. Adding Elements
students.push("Vikram");        // Add at end
students.unshift("Neha");       // Add at beginning
console.log("After Adding:", students);

// 4. Removing Elements
students.pop();                 // Remove from end
students.shift();               // Remove from beginning
console.log("After Removing:", students);

// 5. Updating Elements
students[1] = "Priya";
console.log("After Updating:", students);

// 6. Iterating through Array (for loop)
console.log("Using for loop:");
for (let i = 0; i < students.length; i++) {
    console.log(i + 1 + ".", students[i]);
}

// 7. Iterating using forEach
console.log("Using forEach:");
students.forEach((student, index) => {
    console.log(`${index + 1}. ${student}`);
});

// 8. Basic Array Methods
let courses = ["HTML", "CSS", "JavaScript", "React"];
console.log("Includes 'CSS'?", courses.includes("CSS"));
console.log("Index of 'JavaScript':", courses.indexOf("JavaScript"));
console.log("Sliced Array:", courses.slice(1, 3));
console.log("Joined Array:", courses.join(", "));

// map() and filter()
let upperCourses = courses.map(course => course.toUpperCase());
console.log("Mapped (Uppercase):", upperCourses);

let longCourses = courses.filter(course => course.length > 4);
console.log("Filtered (length > 4):", longCourses);