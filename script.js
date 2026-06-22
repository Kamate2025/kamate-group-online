// =========================
// KAMATE GROUP LTD
// MAIN JAVASCRIPT FILE
// =========================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Kamate Group Ltd Website Loaded Successfully");

    // Fade-in animation
    const fadeElements = document.querySelectorAll(
        ".card, .service-card, .contact-card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }

        });

    }, {
        threshold: 0.15
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

});


// =========================
// WHATSAPP CONTACT FUNCTION
// =========================

function sendWhatsAppMessage(name, service) {

    const phoneNumber = "256787360381";

    const message =
        `Hello, my name is ${name}. I need help with ${service}.`;

    const url =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}


// =========================
// CONTACT PAGE FORM
// =========================


function submitContactForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value.trim();

    const whatsappMessage =
`Hello Kamate Group Ltd,

Name: ${name}
Phone: ${phone}
Email: ${email}

Service Needed:
${service}

Message:
${message}`;

    const whatsappURL =
`https://wa.me/256787360381?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

    document.getElementById("contactForm").reset();

    return false;
}


// =========================
// SCROLL TO TOP
// =========================

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
