
/* fade in project cards when scrolling the page */

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


/* subtle movement for the DINOSAURSSS */

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


/* photography slideshow effect */

const photos = [
    {
        src: "assets/images/IMG_1021.jpeg",
        alt: "Hollywood sign in Los Angeles, California",
        caption: "Hollywood Sign - Los Angeles, CA"
    },
    {
        src: "assets/images/IMG_0833.jpeg",
        alt: "Precious Moments Chapel by artist Samuel J. Butcher",
        caption: "Precious Moments Chapel - Carthage, MO"
    },
    {
        src: "assets/images/IMG_1226.jpeg",
        alt: "Red panda at the Henry Doorly Zoo",
        caption: "Red Panda - Henry Doorly Zoo"
    },
    {
        src: "assets/images/IMG_1320.jpeg",
        alt: "Chinese sanctuary garden in California",
        caption: "Chinese Sanctuary Garden - California"
    },
    {
        src: "assets/images/IMG_2138.jpeg",
        alt: "Race cars at Raceway Park of the Midlands",
        caption: "Raceway Park of the Midlands"
    },
    {
        src: "assets/images/IMG_2677.jpeg",
        alt: "Model for a photoshoot",
        caption: "Indoor Portrait Photoshoot"
    },
    {
        src: "assets/images/IMG_6438.jpeg",
        alt: "Model for a photoshoot",
        caption: "Winter Portrait Photoshoot"
    },
    {
        src: "assets/images/IMG_2703.jpeg",
        alt: "Night sky with stars",
        caption: "Night Sky Photography"
    },
    {
        src: "assets/images/IMG_2229.jpeg",
        alt: "Supra at Raceway Park of the Midlands",
        caption: "Toyota Supra - Raceway Park of the Midlands"
    },
    {
        src: "assets/images/IMG_1326.jpeg",
        alt: "White flower at the Chinese sanctuary garden in California",
        caption: "Nature Photography - Chinese Sanctuary Garden"
    }
];

let currentPhoto = 0;

const slideshowImage = document.getElementById("slideshow-image");
const photoCounter = document.getElementById("photo-counter");
const photoCaption = document.getElementById("photo-caption");

const previousButton = document.querySelector(".prev-photo");
const nextButton = document.querySelector(".next-photo");


function showPhoto(index) {

    currentPhoto = (index + photos.length) % photos.length;

    slideshowImage.src = photos[currentPhoto].src;
    slideshowImage.alt = photos[currentPhoto].alt;

    photoCaption.textContent = photos[currentPhoto].caption;

    photoCounter.textContent =
        `${currentPhoto + 1} / ${photos.length}`;
}


if (slideshowImage && photoCounter && photoCaption && previousButton && nextButton) {

    previousButton.addEventListener("click", () => {
        showPhoto(currentPhoto - 1);
    });

    nextButton.addEventListener("click", () => {
        showPhoto(currentPhoto + 1);
    });

    showPhoto(0);
}
