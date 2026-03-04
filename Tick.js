let lastTime = 0;
let deltaTime = 0;
function tick(timestamp) {
    if (lastTime === 0) lastTime = timestamp;
    deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    updateCarousel();

    requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
