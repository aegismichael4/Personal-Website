// Source - https://stackoverflow.com/a/901144
// Posted by Artem Barger, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-09, License - CC BY-SA 4.0
const urlParams = new URLSearchParams(window.location.search);
const blogID = urlParams.get('blog');

console.log(blogID);
document.getElementById(blogID).style.display = 'block';

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
    window.location.href = `../index.html`;
});