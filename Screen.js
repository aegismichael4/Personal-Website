const screen = document.getElementById("screen");
const gameJamInfo = document.getElementById("game-jam-info");


//#region parameters

let screenShowing = false;
let textShowing = false;
const _screenOpenTime = 1;
const _textScrollDownTime = 2;

//#endregion

//#region html

// reference got in CardHover.js
hoverCards.forEach((card) => {
    card.addEventListener("click", (ev) => {
        enableScreen(card.getBoundingClientRect().top);
    });
});

//#endregion

//#region tick

let lastTime = 0;
let deltaTime = 0;
function tick(timestamp) {
    if (lastTime === 0) lastTime = timestamp;
    deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

//#endregion

//#region coroutines

function enableScreen(cardHeight) {

    root.style.setProperty('--screen-display', 'inline');

    const startScroll = window.scrollY;
    const scrollGoal = window.scrollY + cardHeight + (window.innerHeight / 2.6);

    let timer = 0;
    const scrollDownScreen = setInterval(() => {

        timer += deltaTime;
        if (timer > _screenOpenTime) {
            screenShowing = true;
            root.style.setProperty ('--screen-height', 'auto');
            screen.style.setProperty("aspect-ratio", "16 / 9");
            clearInterval(scrollDownScreen);

        } else if (!textShowing && timer > _screenOpenTime / 2.5) {
            textShowing = true;
            displayText();
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
    gameJamInfo.style.setProperty("display", "block");

    let startY = -screen.clientHeight;
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
        gameJamInfo.style.setProperty("filter", `opacity(${newOpacity}%)`);
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