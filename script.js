document.addEventListener("DOMContentLoaded", () => {
    // Logo animation
    const logo = document.querySelector(".logo");
    logo.classList.add("fade-in");

    // Navigation hover effects
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffcc00";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });

    // Form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for reaching out! I will get back to you soon.");
        form.reset();
    });
});
