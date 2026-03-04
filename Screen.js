const screen = document.getElementById("screen");

//#region parameters

const _screenOpenTime = .5;

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

    //const scrollGoal = window.innerHeight / 10;

    //let height = 0;
    // const interval = setInterval(() => {
    //
    //     let doneCheck = 0;
    //
    //     const deltaY = _screenOpenSpeed * deltaTime;
    //     height += deltaY;
    //     root.style.setProperty('--screen-height', `${height}px`);
    //
    //     const goalHeight = Math.max(10, screen.clientWidth) * 9.0 / 16.0;
    //     if (height >= goalHeight) {
    //         root.style.setProperty('--screen-height', `${goalHeight}px`);
    //         doneCheck++;
    //     }
    //
    //     if (screen.getBoundingClientRect().top > scrollGoal) {
    //         window.scrollBy(0, deltaY);
    //     } else {
    //         doneCheck++;
    //     }
    //
    //     if (doneCheck === 2) clearInterval(interval);
    // });

    const startScroll = window.scrollY;
    const scrollGoal = window.scrollY + cardHeight + (window.innerHeight / 3.2);
    let timer = 0;
    const interval = setInterval(() => {

        timer += deltaTime;
        if (timer > _screenOpenTime) clearInterval(interval);

        const goalHeight = Math.max(100, screen.clientWidth) * 9.0 / 16.0;
        const height = lerp(0, goalHeight, easeOutSine(timer / _screenOpenTime));
        root.style.setProperty('--screen-height', `${height}px`);

        const newScroll = lerp(startScroll, scrollGoal, timer / _screenOpenTime);
        window.scrollTo({
            top: newScroll,
            behavior: "instant"
        });
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

//#endregion