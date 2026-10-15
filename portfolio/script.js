const typingText = document.getElementById("typing-text");

const roles = [
    "Frontend Developer",
    "Web Development Learner",
    "B.Tech IT Student"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentRole.substring(0, charIndex);

    let speed = deleting ? 45 : 90;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1300;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 350;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// Mobile Navigation
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("show");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});


// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});


// Highlight the active navigation link
const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "home";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            currentSection = section.id;
        }
    });

    navigationLinks.forEach(function (link) {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + currentSection
        );
    });
});


// Automatically update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();


// Contact Form
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formNote.textContent = "Please fill in all the fields.";
        return;
    }

    const recipient = "your-email@example.com";

    if (recipient === "your-email@example.com") {
        formNote.textContent =
            "Please replace your-email@example.com in index.html and script.js with your real email address.";
        return;
    }

    const subject = encodeURIComponent("Portfolio Contact from " + name);

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        "mailto:" + recipient +
        "?subject=" + subject +
        "&body=" + body;
});
