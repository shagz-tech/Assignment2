// 1. Creating Objects
let student1 = {
    name: "Aman",
    age: 20,
    course: "B.Tech CSE",
    marks: 85
};

let student2 = {
    name: "Riya",
    age: 21,
    course: "BCA",
    marks: 90
};

let student3 = {
    name: "Karan",
    age: 22,
    course: "MCA",
    marks: 78
};

// 2. Accessing Properties
console.log("Student 1 Name:", student1.name);
console.log("Student 2 Course:", student2["course"]);

// 3. Updating Properties
student1.marks = 88;
console.log("Updated Marks of Student 1:", student1.marks);

// 4. Adding New Properties
student2.email = "riya@example.com";
console.log("After Adding Email:", student2);

// 5. Removing Properties
delete student3.age;
console.log("After Removing Age:", student3);

// 6. Iterating through Object Properties
console.log("Student 1 Details:");
for (let key in student1) {
    console.log(`${key}: ${student1[key]}`);
}

// 7. Array of Objects
let allStudents = [student1, student2, student3];
console.log("All Students:", allStudents);

allStudents.forEach(student => {
    console.log(`${student.name} is enrolled in ${student.course}`);
});