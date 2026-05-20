const headerImg = document.getElementById("header-img");

function parallax() {
    var yPos = window.pageYOffset/50;
    headerImg.style.top = 5 + yPos + "%";
}

window.addEventListener("scroll", function(){
    parallax();
});