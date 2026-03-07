const screen = document.getElementById("screen");
const gameJamInfo = document.getElementById("game-jam-info");


const gameJamTitles = hoverCardsContainer.querySelectorAll("h3");

let screenShowing = false;
let textShowing = false;
const _screenOpenTime = 1;
const _textScrollDownTime = 2;

// reference got in CardHover.js
hoverCards.forEach((card) => {
    card.addEventListener("click", (ev) => {
        setDescription(card.parentElement.id);
        enableScreen(hoverCardsContainer.getBoundingClientRect().top);
        displayText();
        setTimeout(setActiveGame, 550, card.parentElement.id);
        // setActiveGame(card.parentElement.id);
    });
});

gameJamTitles.forEach((title) => {
   title.addEventListener("click", (ev) => {
       setDescription(title.parentElement.id);
       enableScreen(hoverCardsContainer.getBoundingClientRect().top - window.innerHeight / 3.5);
       displayText();
       setTimeout(setActiveGame, 550, title.parentElement.id);
       // setActiveGame(title.parentElement.id)
   });
});

function setActiveGame(gameID) {
    switch(gameID) {
        case "sswud":
            screen.src = "./web-games/sswud/index.html";
            break;
        case "polaris":
            screen.src = "./web-games/polaris/index.html";
            break;
        case "tugboat-fishin":
            screen.src = "./web-games/tugboat-fishin/index.html";
            break;
        case "slingstar":
            screen.src = "./web-games/slingstar/index.html";
            break;
        case "the-heist":
            screen.src = "https://aegismichael4.github.io/Final-Project-CMPM-120/";
            break;
        default:
            screen.src = "";
    }
}

//#region coroutines

function enableScreen(divHeight) {

    root.style.setProperty('--screen-display', 'inline');

    const startScroll = window.scrollY;
    const scrollGoal = window.scrollY + divHeight + (window.innerHeight * 0.72);

    let timer = 0;
    const scrollDownScreen = setInterval(() => {

        timer += deltaTime;
        if (timer > _screenOpenTime) {
            screenShowing = true;
            root.style.setProperty ('--screen-height', 'auto');
            screen.style.setProperty("aspect-ratio", "16 / 9");
            clearInterval(scrollDownScreen);

        }

        const t = timer / _screenOpenTime;

        if (!screenShowing) {
            const goalHeight = Math.max(100, screen.clientWidth) * 9.0 / 16.0;
            const height = lerp(0, goalHeight, easeOutCubic(t));
            root.style.setProperty ('--screen-height', `${height}px`);
        }

        const newScroll = lerp(startScroll, scrollGoal, easeOutCubic(t));
        window.scrollTo({
            top: newScroll,
            behavior: "instant"
        });
    });
}

function displayText() {

    if(textShowing) return;
    textShowing = true;

    gameJamInfo.style.setProperty("display", "block");

    let startY = -screen.clientHeight * 1.1;
    gameJamInfo.style.setProperty("transform", `translateY(${startY}px)`);


    let timer = 0;
    const scrollDownText = setInterval(() => {

        timer += deltaTime;
        if (timer > _textScrollDownTime) {
            clearInterval(scrollDownText);
        }

        let t = lerp(0, 1, easeOutSine( timer / _textScrollDownTime));

        let newY = lerp(startY, 0, t);
        gameJamInfo.style.setProperty("transform", `translateY(${newY}px)`);

        let newOpacity = t * 100;
        //gameJamInfo.style.setProperty("filter", `opacity(${newOpacity}%)`);
    });
}

//#endregion

//#region easing curves

function lerp(a, b, t) {
    return t * b + (1 - t) * a;
}

function easeOutSine(x) {
    return Math.sin((x * Math.PI) / 2);
}

function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}

//#endregion