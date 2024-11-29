document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-right button");
    const contentSection = document.getElementById("content-section");
    const projectsContainer = document.getElementById("projects-container");

    // Example projects array
    const projects = [
        { title: "Portfolio Website", description: "The exact portfolio you are looking at ;)" },
        { title: "TO-DO app", description: "Simple to-do app created with html, css and javascript" },
        { title: "Calculator app", description: "Classic, a calculator app created with html, css and javascript" },
    ];

    // Populate projects
    function loadProjects() {
        projectsContainer.innerHTML = ""; // Clear existing projects
        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

    // Content for sections
    const sections = {
        about: `
            <h2>About Me</h2>
            <p>
                I'm a ITS Help Desk Technician since August 2024 and a Computer Science student. I enjoy solving problems and 
                constantly learning new technologies. 
            </p>
        `,
        projects: `
            <h2>My Projects</h2>
            <p>Here are some of my latest projects:</p>
        `,
        contact: `
            <h2>Contact Me</h2>
            <p>
                Fill out the form to contact me here<br>
                I will get back to you as soon as possible!
            </p>
            <ul>
                <section id="contact-form">
        
        <form action="https://formspree.io/f/mnnqgyyn" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" name="email" required>

            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
        </form>
        </section>
            </ul>
        `,
    };

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const section = button.getAttribute("data-section");
            contentSection.innerHTML = sections[section] || "Content not available.";
            if (section === "projects") {
                loadProjects(); // Load projects when the "Projects" button is clicked
            } else {
                projectsContainer.innerHTML = ""; // Clear projects if navigating away
            }
        });
    });
});