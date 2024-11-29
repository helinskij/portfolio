document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-right button");
    const contentSection = document.getElementById("content-section");
    const projectsContainer = document.getElementById("projects-container");

    // Example projects array
    const projects = [
        { title: "Portfolio Website", description: "The exact portfolio you are looking at ;)"},
        { title: "TO-DO app", description: "Simple to-do app created with html, css and javascript", link: "https://github.com/helinskij/To-Do-app"},
        { title: "Calculator app", description: "Classic, a calculator app created with html, css and javascript", link: "https://github.com/helinskij/Calculator"},
        { title: "Bank management system", description: "Small Java project using OOP", link: "https://github.com/helinskij/bank-management-system" },
        { title: "More coming soon...", description: ""},
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
            projectCard.addEventListener('click', ()=>{
                if(project.link){
                    window.open(project.link, '_blank');
                }
            })
            projectsContainer.appendChild(projectCard);
        });
    }

    // Content for sections
    const sections = {
        about: `
            <h2>About Me</h2>
            <p>
                I'm a ITS Help Desk Technician and a Computer Science student. I enjoy solving problems, constantly learning new
                 technologies and coding.
                <br><br>Languages I know: HTML, CSS, JavaScript, Java, Python
                <br>I also know basics for: PHP, MYSQL, C++, C
            </p>
        `,
        projects: `
            <h2>My Projects</h2>
            <p>Here are some of my latest projects:</p>
        `,
        contact: `
            <h2>Contact Me</h2>
            <p>
                Fill out the form and I will get back to you as soon as possible! <br>
                You can also email me directly here:
                contact@jakubhelinski.com
                 
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

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navRight = document.querySelector(".nav-right");
    const navButtons = document.querySelectorAll(".nav-right button");

    // Toggle menu visibility
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active"); // Animate hamburger
        navRight.classList.toggle("mobile-visible"); // Show/hide menu
    });

    // Hide menu when a button is clicked
    navButtons.forEach((button) => {
        button.addEventListener("click", () => {
            navRight.classList.remove("mobile-visible"); // Hide menu
            hamburger.classList.remove("active"); // Reset hamburger animation
        });
    });
});