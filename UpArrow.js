const upOne = document.getElementById("up-arrow-one");
const upTwo = document.getElementById("up-arrow-two");
const upThree = document.getElementById("up-arrow-three");

upThree.addEventListener("mouseover", () => {
    upOne.setAttribute("class", "up-one");
    upTwo.setAttribute("class", "up-two");
    upThree.setAttribute("class", "up-three");
});

upThree.addEventListener("mouseleave", () => {
    upOne.setAttribute("class", "");
    upTwo.setAttribute("class", "");
    upThree.setAttribute("class", "");
});

upThree.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


const upArrows = document.getElementById("up-arrows");

document.addEventListener("scroll", (ev) => {
    if (window.scrollY < 30) upArrows.setAttribute("class", "hidden-arrows");
    else upArrows.setAttribute("class", "up-arrows");
});
