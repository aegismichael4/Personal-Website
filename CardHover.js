const hoverEffectIntensity = 30;

const root = document.documentElement;
const hoverCardsContainer = document.getElementById("hover-cards");
const hoverCards = hoverCardsContainer.querySelectorAll("img");

hoverCards.forEach((card) => {
    card.addEventListener("mousemove", (ev) => {

        let x = (ev.clientX - card.getBoundingClientRect().left) / card.clientWidth;
        let y = (ev.clientY - card.getBoundingClientRect().top) / card.clientHeight;

        x = x * (hoverEffectIntensity) - (hoverEffectIntensity / 2);
        y = y * (hoverEffectIntensity) - (hoverEffectIntensity / 2);

        root.style.setProperty('--mouseX', `${x}deg`);
        root.style.setProperty('--mouseY', `${y}deg`);
    });
});