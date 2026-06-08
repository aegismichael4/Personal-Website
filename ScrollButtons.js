const scrollButtonsContainer = document.getElementById("scroll-buttons");
const scrollButtons = scrollButtonsContainer.querySelectorAll("h3");

const aboutMe = document.getElementById("about-me-scroll-to");
const steamRelease = document.getElementById("steam-release-scroll-to");
const currentProject = document.getElementById("stardozing-scroll-to")
const gameJams = document.getElementById("game-jams-scroll-to");
const blogPosts = document.getElementById("blog-posts-scroll-to");

scrollButtons[0].addEventListener("click", () => {
    aboutMe.scrollIntoView({behavior: "smooth"});
});

scrollButtons[1].addEventListener("click", () => {
    steamRelease.scrollIntoView({behavior: "smooth"});
});

scrollButtons[2].addEventListener("click", () => {
    currentProject.scrollIntoView({behavior: "smooth"});
});

scrollButtons[3].addEventListener("click", () => {
    gameJams.scrollIntoView({behavior: "smooth"});
});


scrollButtons[4].addEventListener("click", () => {
    blogPosts.scrollIntoView({behavior: "smooth"});
});

