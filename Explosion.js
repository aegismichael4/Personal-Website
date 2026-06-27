const pfp = document.getElementById("pfp");
// const explosion = document.getElementById("explosion");


pfp.addEventListener("click", (ev) => {
    
    let explosion = document.createElement("img");
    const gifUrl = "img/icons/explosion.gif"
    explosion.src = `${gifUrl}?t=${new Date().getTime()}`;
    explosion.draggable = false;
    
    console.log("created explosion");
    
    explosion.style.position = "absolute";
    explosion.style.left = `${ev.clientX - 100}px`;
    explosion.style.top = `${ev.clientY + window.scrollY - 140}px`;
    explosion.style.pointerEvents = "none";
    
    document.body.appendChild(explosion);

    setTimeout(() => {
        explosion.remove();
    }, 790);
});