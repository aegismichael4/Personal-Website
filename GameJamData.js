//#region data

class GameJamData {
    constructor(id, title, position, description, images, gameJamName, gameJamLink, gameLink) {
        this.id = id;
        this.title = title;
        this.position = position;
        this.description = description;
        this.images = images;
        this.gameJamName = gameJamName;
        this.gameJamLink = gameJamLink;
        this.gameLink = gameLink;
    }
}

let data = [];

function createData() {


    data.push(new GameJamData(
        "sswud",
        "Super Space Whalez Ultra Deluxe",
        "Solo Development",
        "Super Space Whalez Ultra Deluxe, aka S.S.W.U.D., was my first-ever game jam!" +
        "For this project, I was really inspired by the look and feel of GameBoy games at the time, " +
        "having been fresh off of my first playthrough of Metroid 2: Return of Samus.<br><br>" +
        "S.S.W.U.D. is about hacking into a computer with a home-brewed device that gamifies the process " +
        "of stealing data and avoiding anti-virus. I really wanted the device, as well as the hacker herself, " +
        "to be super girly, as there are so few girly GameBoy games, so I decked it out with cute stickers and " +
        "made sure her nails were visible.<br><br>" +
        "The game itself is a top-down puzzle exploration game. You play as a little ship, piloting around and " +
        "making use of the picking up and throwing mechanic to solve environmental puzzles, knock around the " +
        "antivirus space whales, and return data to your home ship (the usb port).",
        ["img/screenshots/sswud/1.png", "img/screenshots/sswud/2.png", "img/screenshots/sswud/3.png", "img/screenshots/sswud/4.png"],
        "Jame Gam 50 ⭑ June 2025",
        "https://itch.io/jam/jame-gam-50",
        "https://aegishehe.itch.io/super-space-whalez-ultra-deluxe"


    ));

    data.push(new GameJamData(
        "polaris",
        "Polaris",
        "Studio Verdigris: Lead Design ⭑ Technical Artist",
        "Polaris was a winning game jam entry to the week-long Uni Game Jam. Given the theme 'astral,' we soon came up " +
        "with the idea for a 2D physics-based puzzle game about placing down planets to guide a little star through space.<br><br>" +
        "This simple idea kicked off a 9-month long project, as we fell in love with Polaris, which we renamed Eltanin, and went all-in " +
        "on UX, level design, visuals, and polish. So much of my development experience directly stemmed from this game jam, and looking " +
        "back at it makes me both nostalgic and proud, knowing how far we've come!",
        ["img/screenshots/polaris/1.png", "img/screenshots/polaris/2.png", "img/screenshots/polaris/3.png", "img/screenshots/polaris/4.png",
                "img/screenshots/polaris/5.png"],
        "Uni Game Jam ⭑ July 2025",
        "https://itch.io/jam/california-uni-summer-game-jam",
        "https://saisgonerogue.itch.io/polaris"
    ));

    data.push(new GameJamData(
        "tugboat-fishin",
        "Tugboat Fishin'",
        "Solo Development",
        "Tugboat Fishin' was an experiment for me, being the shortest solo-developed game I've ever made and having a clear " +
        "goal for player experience from the get-go. I wanted to make a game that had a really memorable 'moment.' The theme for this " +
        "jam was 'loop,' so after hopping in a call with my brother to brainstorm, and we came up with the idea of a fishing game where " +
        "you catch fish with a lasso. From there, I figured the 'moment' could be a harsh gameplay transition into a race section, where " +
        "the fish you catch pulls the boat.<br><br>" +
        "Tugboat Fishin' was also an excuse for me to try out my new drawing tablet! I ended up going for something simple but distict, " +
        "hopefully to pair with the surprising nature of the gameplay, to make the game stand out even more (as it was a submission for " +
        "GMTK, so I knew people would be playing through many different games). To do this, nearly everything in the game is animated, " +
        "flipping between several re-drawn sprites of itself to give it a 'wiggly' look, and the hand-drawn aesthetic I settled on was " +
        "inspired by my Discord whiteboard sketches with my brother.",
        ["img/screenshots/tugboat-fishin/1.png", "img/screenshots/tugboat-fishin/2.png", "img/screenshots/tugboat-fishin/3.png",
            "img/screenshots/tugboat-fishin/4.png", "img/screenshots/tugboat-fishin/5.png"],
        "GMTK 2025 ⭑ August 2025",
        "https://itch.io/jam/gmtk-2025",
        "https://aegishehe.itch.io/tugboat-fishin"
    ));

    data.push(new GameJamData(
        "roi",
        "ROI",
        "Studio Verdigris: Lead Design ⭑ Technical Artist",
        "ROI, the second game I made with Studio Verdigris, stands for both 'Return on Investment' and 'Rush on Impact.' The core " +
        "idea of the game is that your health is inversely proportional to your damage, and you're outfitted with a parry to allow you both to " +
        "rush in on enemies on an endlessly generating train and block all damage.<br><br>" +
        "More than anything, on my part ROI became an amazing practice ground for all sorts of VFX. From hand-animating the increasingly flaming " +
        "health bar to the gradiented parry afterimages to the dynamic title screen, I fell in love with the flashy, gritty visual effect style " +
        "of ROI.",
        ["img/screenshots/roi/1.png", "img/screenshots/roi/2.png", "img/screenshots/roi/3.png"],
        "Brackeys 2025.2 ⭑ August 2025",
        "https://itch.io/jam/brackeys-14",
        "https://studioverdigris.itch.io/roi"
    ));

    data.push(new GameJamData(
        "slingstar",
        "slingstar",
        "Studio Verdigris: Lead Design ⭑ Graphics Programmer ⭑ VFX Artist",
        "Slingstar was my first-ever 3D game, and an amazing experience at that! Given the theme 'Cozy Cyberpunk,' we came up with " +
        "the idea for a cooking sim game about slingin' dawgs in a dystopian cyber-city, which turned out to be really fun to work on. The " +
        "core-loop is simple: make a good enough hot dog to please the current customer, given their sensitivity. More lenient customers will " +
        "tolerate more rat meat and are more likely to leave a good review, and vice versa.<br><br>" +
        "The part of working on slingstar that unexpectedly became my favorite was the 3D animations. I particularly enjoyed making the telephone " +
        "have a lot of personality and emotion with the happy and angry customer calls, pairing in some particle effects for style.",
        ["img/screenshots/slingstar/1.png", "img/screenshots/slingstar/2.png", "img/screenshots/slingstar/3.png",
            "img/screenshots/slingstar/4.png"],
        "ICJ6 ⭑ December 2025",
        "https://itch.io/jam/international-college-jam-6",
        "https://saisgonerogue.itch.io/slingstar"
    ));

    data.push(new GameJamData(
        "the-heist",
        "The Heist",
        "Solo Development",
        "The Heist was my final project for CMPM 120: Game Development Experience. With class requirements preventing me from " +
        "going over a custom asset limit (which I used almost exclusively on the character animations), I was forced to focus very heavily " +
        "on the design and implementation of the game, which turned out to be a great experience for me. The Heist is a quick journey there-" +
        "and-back, with a gameplay goal for something speedrun friendly. I wanted something easy to learn and difficult to master, so I " +
        "added movement 'techs' that I'm interested in, like a walljump inspired by Super Metroid and a midair dive allowing for riskier routes." +
        "<br><br>" +
        "Excited by the idea of surprising the player with a false ending, I added an 'artifact' for the player to collect at the end of the classic " +
        "sidescrolling platformer, with the twist being that it flips your gravity to stick you to the rightmost side, forcing you to platform your " +
        "way back up as the giant stone door closes in the distance." +
        "<br><br>" +
        "To incite some friendly competition and show off my game, I hosted a little speedrun competition with my friends and peers after I'd " +
        "finished the game for a grand total of $5. It was awesome.",
        ["img/screenshots/the-heist/1.png", "img/screenshots/the-heist/2.png", "img/screenshots/the-heist/3.png"],
        "CMPM 120 ⭑ May 2025",
        "",
        "https://aegismichael4.github.io/Final-Project-CMPM-120/"
    ));
}
createData();

function retrieveData(id) {
    for (let jam of data) {
        if (jam.id === id) return jam;
    }
}

//#endregion

const title = document.getElementById("game-jam-title");
const position = document.getElementById("game-jam-position");
const description = document.getElementById("game-jam-description");
const name = document.getElementById("game-jam-name");
const button = document.getElementById("game-jam-a");

function setDescription(gameID) {
    const data = retrieveData(gameID);
    if (!data) {
        console.log('failed to retrieve game jam data');
        return;
    }

    title.innerHTML = data.title;
    position.innerHTML = data.position;
    description.innerHTML = data.description;

    name.innerHTML = data.gameJamName;
    name.setAttribute("href", data.gameJamLink);

    button.setAttribute("href", data.gameLink);

    setCarousel(data.images);
}