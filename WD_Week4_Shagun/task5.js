// 1. Click Event
document.getElementById("clickBtn").addEventListener("click", () => {
    document.getElementById("clickOutput").textContent = "Button was clicked!";
});

// 2. Input Event
document.getElementById("nameInput").addEventListener("input", (e) => {
    document.getElementById("inputOutput").textContent = "You typed: " + e.target.value;
});

// 3. Submit Event
document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    const name = document.getElementById("formName").value;
    document.getElementById("formOutput").textContent = "Form submitted! Name: " + name;
});

// 4. Mouse Events
const mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", () => {
    mouseBox.style.backgroundColor = "#4CAF50";
    mouseBox.textContent = "Mouse is over me!";
});

mouseBox.addEventListener("mouseout", () => {
    mouseBox.style.backgroundColor = "#ff9800";
    mouseBox.textContent = "Hover over me";
});

// 5. Keyboard Event
document.getElementById("keyInput").addEventListener("keydown", (e) => {
    document.getElementById("keyOutput").textContent = "Key pressed: " + e.key;
});
