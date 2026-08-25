// Array to store tasks (Objects)
let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

// Function to Add Task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task object
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
}

// Function to Render Tasks (DOM Manipulation)
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        if (task.completed) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = task.text;

        // Toggle Complete on Click
        span.addEventListener("click", () => {
            toggleComplete(task.id);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    taskCount.textContent = "Total Tasks: " + tasks.length;
}

// Function to Toggle Complete
function toggleComplete(id) {
    tasks = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    renderTasks();
}

// Function to Delete Task
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    renderTasks();
}

// Event Listeners
document.getElementById("addTaskBtn").addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});