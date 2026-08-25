// 1. Selecting HTML Elements
const heading = document.getElementById("main-heading");
const description = document.getElementById("description");
const contentBox = document.getElementById("content-box");
const itemList = document.getElementById("itemList");

// 2. Changing Text Content
document.getElementById("changeTextBtn").addEventListener("click", () => {
    description.textContent = "The text has been changed using JavaScript!";
    heading.textContent = "DOM Manipulation - Text Updated";
});

// 3. Changing HTML Content
document.getElementById("changeStyleBtn").addEventListener("click", () => {
    contentBox.innerHTML = "<b>Content updated using innerHTML!</b>";
    // 4. Changing CSS Styles
    contentBox.style.backgroundColor = "lightyellow";
    contentBox.style.border = "2px solid green";
    contentBox.style.color = "darkgreen";
});

// 5. Adding Elements
document.getElementById("addElementBtn").addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item " + (itemList.children.length + 1);
    itemList.appendChild(newItem);
});

// 6. Removing Elements
document.getElementById("removeElementBtn").addEventListener("click", () => {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
    }
});