const hoverEffectIntensity = 20;

const root = document.documentElement;

const hc1 = document.getElementById("hover-cards-1").querySelectorAll("img");
const hc2 = document.getElementById("hover-cards-2").querySelectorAll("img");
const hoverCards = Array.from(hc1).concat(Array.from(hc2));

const blogHoverCardsContainer = document.getElementById("blog-hover-cards");
const blogHoverCards = blogHoverCardsContainer.querySelectorAll("img");

hoverCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => hover(e, card));
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