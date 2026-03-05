const carouselImages = document.getElementById("carousel-images");

let carouselActive = false;
let activeImages = [];
let activeDots = [];
let activeImageIndex = 0;
const _slideTime = 3;

function setCarousel(imageSources) {

    carouselActive = true;

    activeImages = [];
    activeDots = [];

    const count = imageSources.length;
    carouselImages.innerHTML = ""; // clear all images and dots

    const dots = document.createElement("div");
    dots.setAttribute("class", "dots");
    carouselImages.appendChild(dots);

    for (const img of imageSources) {

        // add image
        const newImage = document.createElement("img");
        newImage.setAttribute("src", img);
        newImage.setAttribute("alt", "Screenshot");
        newImage.setAttribute("draggable", "false");
        carouselImages.appendChild(newImage);
        activeImages.push(newImage);

        // add dot
        const dot = document.createElement("div");
        dot.setAttribute("class", "dotInactive");
        dots.appendChild(dot);
        activeDots.push(dot);
    }
    activeImageIndex = 0;
    setActiveImage();
}

function nextImage() {
    activeImageIndex++;
    if (activeImageIndex >= activeImages.length) activeImageIndex = 0;
    setActiveImage();
}

function setActiveImage() {
    for (let i = 0; i < activeImages.length; i++) {
        activeImages[i].setAttribute("style", "display: none");
        activeDots[i].setAttribute("class", "dotInactive");
    }
    activeImages[activeImageIndex].setAttribute("style", "display: inline; object-fit: contain; background-color: black;");
    activeDots[activeImageIndex].setAttribute("class", "dotActive");
}

let timer = 0;
function updateCarousel() { // called in tick.js
    if (!carouselActive) return;

    timer += deltaTime;
    if (timer > _slideTime) {
        timer = 0;
        nextImage();
    }
}