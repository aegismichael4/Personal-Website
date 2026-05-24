const carouselImagesSide = document.getElementById("carousel-images-side");
const carouselImagesBottom = document.getElementById("carousel-images-bottom");

let carouselActive = false;
let activeImages = [];
let activeDots = [];
let activeImageIndex = 0;
const _slideTime = 3;

function setCarousel(imageSources) {

    carouselActive = true;

    activeImages = [];
    activeDots = [];

    carouselImagesSide.innerHTML = ""; // clear all images and dots
    carouselImagesBottom.innerHTML = "";

    const dotsSide = document.createElement("div");
    dotsSide.setAttribute("class", "dots");
    carouselImagesSide.appendChild(dotsSide);

    const dotsBottom = document.createElement("div");
    dotsBottom.setAttribute("class", "dots");
    carouselImagesBottom.appendChild(dotsBottom);

    for (const img of imageSources) {

        // add side image
        const newImageSide = document.createElement("img");
        newImageSide.setAttribute("src", img);
        newImageSide.setAttribute("alt", "Screenshot");
        newImageSide.setAttribute("draggable", "false");
        carouselImagesSide.appendChild(newImageSide);
        activeImages.push(newImageSide);

        // add bottom image
        const newImageBottom = document.createElement("img");
        newImageBottom.setAttribute("src", img);
        newImageBottom.setAttribute("alt", "Screenshot");
        newImageBottom.setAttribute("draggable", "false");
        carouselImagesBottom.appendChild(newImageBottom);
        activeImages.push(newImageBottom);

        // add dot
        const dotSide = document.createElement("div");
        dotSide.setAttribute("class", "dotInactive");
        dotsSide.appendChild(dotSide);
        activeDots.push(dotSide);

        const dotBottom = document.createElement("div");
        dotBottom.setAttribute("class", "dotInactive");
        dotsBottom.appendChild(dotBottom);
        activeDots.push(dotBottom);
    }
    activeImageIndex = 0;
    setActiveImage();
}

function nextImage() {
    activeImageIndex+=2;
    if (activeImageIndex >= activeImages.length) activeImageIndex = 0;
    setActiveImage();
}

function setActiveImage() {
    for (let i = 0; i < activeImages.length; i++) {
        activeImages[i].setAttribute("style", "display: none");
        activeDots[i].setAttribute("class", "dotInactive");
    }
    activeImages[activeImageIndex].setAttribute("style", "display: inline; object-fit: contain; background-color: black;");
    activeImages[activeImageIndex+1].setAttribute("style", "display: inline; object-fit: contain; background-color: black;");
    activeDots[activeImageIndex].setAttribute("class", "dotActive");
    activeDots[activeImageIndex+1].setAttribute("class", "dotActive");

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