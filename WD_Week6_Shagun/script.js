/* ---------- CONTACT FORM VALIDATION ---------- */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formStatus.textContent = "Please fill in all fields.";
            formStatus.style.color = "red";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formStatus.textContent = "Please enter a valid email address.";
            formStatus.style.color = "red";
            return;
        }

        formStatus.textContent = `Thank you, ${name}! Your message has been received.`;
        formStatus.style.color = "green";
        contactForm.reset();
    });
}

/* ---------- PROJECTS FILTER ---------- */

const projects = [
    {
        title: "ShagunVerse AI",
        category: "AI",
        description: "An advanced AI companion platform leveraging OpenAI's API with a clean Streamlit interface."
    },
    {
        title: "Premium Portfolio",
        category: "Frontend",
        description: "A high-end, responsive portfolio built with modern CSS techniques and dark-mode aesthetics."
    },
    {
        title: "Weather Pro",
        category: "Frontend",
        description: "A dynamic weather application that provides real-time weather updates with a clean and user-friendly interface."
    },
    {
        title: "Online Exam System",
        category: "Full Stack",
        description: "A web-based examination platform that allows users to take tests, manage results, and ensures a smooth assessment experience."
    },
    {
        title: "GhostWriter Forensics",
        category: "AI",
        description: "A collaborative project focused on analyzing writing patterns and detecting authorship using intelligent techniques."
    }
];

function renderProjects(filteredProjects) {
    const container = document.getElementById("projectsContainer");
    container.innerHTML = "";

    filteredProjects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <span class="tag">${project.category}</span>
        `;
        container.appendChild(card);
    });
}

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        filterButtons.forEach(b => b.classList.remove("active"));
        this.classList.add("active");

        const category = this.getAttribute("data-category");
        const filtered = category === "All"
            ? projects
            : projects.filter(p => p.category === category);

        renderProjects(filtered);
    });
});

renderProjects(projects);

/* ---------- DARK / LIGHT MODE TOGGLE ---------- */

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "🌙 Dark Mode";
    } else {
        toggleBtn.textContent = "☀️ Light Mode";
    }
});