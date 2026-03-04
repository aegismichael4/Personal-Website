const carousel = document.getElementById("carousel");
const carouselImages = document.getElementById("carousel-images");

let carouselActive = false;
let activeImages = [];
let activeImageIndex = 0;
const _slideTime = 3;

function setCarousel(imageSources) {

    carouselActive = true;

    const count = imageSources.length;
    carouselImages.innerHTML = ""; // clear all images
    for (const img of imageSources) {
        const newImage = document.createElement("img");
        newImage.setAttribute("src", img);
        newImage.setAttribute("alt", "Screenshot");
        newImage.setAttribute("draggable", "false");
        carouselImages.appendChild(newImage);

        activeImages.push(newImage);
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
    }
    activeImages[activeImageIndex].setAttribute("style", "display: inline");
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