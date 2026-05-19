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
const sectionButtons = [];

class SectionButton {
    sectionButton;
    sectionHeader;

    constructor(sectionButton, sectionHeader) {
        this.sectionButton = sectionButton;
        this.sectionHeader = sectionHeader;
    }
}

sections.forEach((section) => {

    const sectionButton = document.createElement("h2");
    sectionButton.innerHTML = section.innerHTML;

    sectionButton.addEventListener("click", () => {
        section.scrollIntoView({
            behavior: 'smooth',
        });
    });

    sectionButtons.push(new SectionButton(sectionButton, section));

    blogRegionsContainer.appendChild(sectionButton);
});

function UpdateSectionButtons() {

    let reachedScroll = false;
    for (let i = sectionButtons.length - 1; i >= 0; i--) {
        if (!reachedScroll && sectionButtons[i].sectionHeader.getBoundingClientRect().top < 10) {
            reachedScroll = true;
            sectionButtons[i].sectionButton.style.transform = 'scale(1.3)'
        } else {
            sectionButtons[i].sectionButton.style.transform = 'scale(1)'
        }
    }
}

//#endregion

//#region tick

let lastTime = 0;
let deltaTime = 0;
function tick(timestamp) {
    if (lastTime === 0) lastTime = timestamp;
    deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    UpdateSectionButtons();

    requestAnimationFrame(tick);
}
requestAnimationFrame(tick);


//#endregion