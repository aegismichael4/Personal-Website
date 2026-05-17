// Source - https://stackoverflow.com/a/901144
// Posted by Artem Barger, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-09, License - CC BY-SA 4.0
const urlParams = new URLSearchParams(window.location.search);
const blogID = urlParams.get('blog');

console.log(blogID);
const currBlog = document.getElementById(blogID);
currBlog.style.display = 'block';

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
    window.location.href = `../index.html`;
});

//#region blog sections

const blogRegionsContainer = document.getElementById("blog-sections");
const sections = currBlog.querySelectorAll("h2");

sections.forEach((section) => {
    const sectionButton = document.createElement("h2");
    sectionButton.innerHTML = section.innerHTML;
    console.log(sectionButton.innerHTML);
    blogRegionsContainer.appendChild(sectionButton);
});

//#endregion