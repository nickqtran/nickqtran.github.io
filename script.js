/* fade in project cards on scroll */

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }
    });

}, {
    threshold: 0.15
});

cards.forEach((card) => {
    observer.observe(card);
});

/* subtle movement for dinos */

document.addEventListener("mousemove", (event) => {

    const dinos = document.querySelectorAll(
        ".title-dino, .yellow-dino, .contact-dino"
    );

    const x = (window.innerWidth / 2 - event.clientX) / 90;
    const y = (window.innerHeight / 2 - event.clientY) / 90;

    dinos.forEach((dino) => {

        dino.style.transform =
            `translate(${x}px, ${y}px)`;
    });
});