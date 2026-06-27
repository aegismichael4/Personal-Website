const headerImg = document.getElementById("header-img");

function parallax() {
    var yPos = window.pageYOffset/50;
    var yOffset = window.innerWidth / 300;
    headerImg.style.top = yOffset + yPos + "%";
    requestAnimationFrame(parallax)
}

requestAnimationFrame(parallax);