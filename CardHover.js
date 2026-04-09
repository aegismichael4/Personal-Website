const hoverEffectIntensity = 20;

const root = document.documentElement;

const hoverCardsContainer = document.getElementById("hover-cards");
const hoverCards = hoverCardsContainer.querySelectorAll("img");

const blogHoverCardsContainer = document.getElementById("blog-hover-cards");
const blogHoverCards = blogHoverCardsContainer.querySelectorAll("img");

hoverCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => hover(e, card));
    console.log("test");
});

blogHoverCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => hover(e, card));
});

function hover(event, card) {
    let x = (event.clientX - card.getBoundingClientRect().left) / card.clientWidth;
    let y = (event.clientY - card.getBoundingClientRect().top) / card.clientHeight;

    x = x * (hoverEffectIntensity) - (hoverEffectIntensity / 2);
    y = y * (hoverEffectIntensity) - (hoverEffectIntensity / 2);

    root.style.setProperty('--mouseX', `${x}deg`);
    root.style.setProperty('--mouseY', `${y}deg`);
}