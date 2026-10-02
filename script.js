emailjs.init({
    publicKey: "D8BRvcPkLml45WbH5"
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    emailjs.sendForm(
        "service_hh6s05i",
        "template_xyzrb9a",
        contactForm
    )
    .then(() => {
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
    })
    .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Sorry! Your message could not be sent.");
    });
});