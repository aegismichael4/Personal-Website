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
        "https://aegismichael4.github.io/Final-Project-CMPM-120/",
        "https://aegismichael4.github.io/Final-Project-CMPM-120/"
    ));

    data.push(new GameJamData(
        "middys-slimetastic-adventure",
        "Middy's Slimetastic Adventure",
        "Solo Development",
        "This game represents a major step forwards for me in terms of engineering. I made Middy's Slimetastic Adventure as my " +
        "final project for a procedural generation class, which placed heavy emphasis on making and using procedural tools. One of my peers, " +
        "Tate Maguire, made an awesome MIDI file generator with lots of parameters, which he called the DrumBreakGenerator--you can find it " +
        "on tatemaguire.games! I felt really inspired by it, and wanted to take a stab at a rhythm game with procedurally generating music." +
        "<br><br>" +
        "This project started with a whole lot of research. Tate's DrumBreakGenerator is written in c++, which I knew in theory was usable " +
        "in my engine of choice, Unity, but I'd never tried making a plugin before and didn't know where to start. Though it was a long, long " +
        "process, I eventually figured out how to compile the project into a DLL file and successfully bridge the gap between c++ and c# to " +
        "reference Tate's code and generate a MIDI file at runtime, directly from the Unity application. From there, after even more research " +
        "and a failed attempt, I landed on Thunk Monkey's Fluid MIDI Player plugin to play the files I was generating. The final major engineering " +
        "hurdle was modifying Tate's code to return data back to my program on when each note starts, which I combined with the Fluid MIDI " +
        "Player's tick tracking, to successfully time inputs to the beat." +
        "<br><br>" +
        "Finally, with a strong rhythm game engineering foundation, I was ready to start making something playable. To keep the complexity and difficulty " +
        "within reason, I settled on a simple character controller, mouse to aim, and the two mouse buttons to use two different attacks--left click is " +
        "synced with the kick drum and right click the snare. Being myself, I placed a heavy emphasis on animating striking vfx with Aseprite, something I " +
        "hadn't had the chance to do since I made Super Space Whalez Ultra Deluxe, nearly a year prior. My main gameplay hook, outside the moment-to-moment " +
        "of timing your inputs to the generated beat, is that the weapons can be swapped with loot dropped from enemies, which both change the shape, damage, " +
        "and knockback of the weapon as well as the sound of its respective drum. To tie everything together, I used a simple roguelike loop, where you're " +
        "free to explore in any direction, the goal is to clear as many rooms as possible, and death means restarting completely." +
        "<br><br>" +
        "Ultimately, I think what went smoothest in this project was the tried-and-true pixel art vfx. I really enjoyed the opportunity to work on them " +
        "again, and I'd like to again soon. Though I'm really proud of myself for getting it working at all, I think the MIDI generation and playback " +
        "was the biggest bump, especially given that I was only able to get it working on Windows and only on about two thirds of the Windows computers " +
        "we playtested with. If I had more time for this project, I'd definitely want to try to find a solution for that problem, and put more time and " +
        "care into the level design, progression, and juice.",
        ["img/screenshots/middys-slimetastic-adventure/1.png", "img/screenshots/middys-slimetastic-adventure/2.png", "img/screenshots/middys-slimetastic-adventure/3.png",
            "img/screenshots/middys-slimetastic-adventure/4.png"],
        "CMPM 147 ⭑ March 2026",
        "https://aegishehe.itch.io/middys-slimetastic-adventure",
        "https://aegishehe.itch.io/middys-slimetastic-adventure"
    ));

    data.push(new GameJamData(
        "stardozing",
        "stardozing",
        "project stardozing: Technical Artist ⭑ Technical Designer ⭑ Network Engineer ⭑ 3D Generalist",
        "stardozing is an online multiplayer 'friendlop' game about cave diving in alien worlds to find a place to hibernate, where you can pick up " +
        "and throw the things you find around you, including your friends! It's been an absolute blast to work on so far, and we all have so many ideas to " +
        "keep development going. This project started as a submission to the Unlikely Collaborators Game Jam, but with such a fun premise and initial development " +
        "period, the team has decided to keep working on it as our capstone project in our senior year at UCSC." +
        "<br><br>" +
        "As an online multiplayer game, there was already a large hurdle for us to clear to even begin development. I took the lead with setting up our networking " +
        "solution--Fishnet. With the ultimate goal of releasing on Steam, I also set up our game with Facepunch.Steamworks to handle peer-to-peer connections, " +
        "allowing us to play together through Steam's servers. Though it was an enourmous initial undertaking to do before even being able to start developing the " +
        "game, I'm glad that I decided to tackle it early, as the team has since encountered that game development is more complex with an online game." +
        "<br><br>" +
        "Though we were only able to set up the very core systems for the jam (online hosting, a simple character controller, picking up and throwing items and " +
        "friends), we have so many ideas and plans for the future, and are continuing development in earnest. I'm very excited to keep at it!",
        ["img/screenshots/stardozing/1.png", "img/screenshots/stardozing/2.png", "img/screenshots/stardozing/3.png", "img/screenshots/stardozing/4.png"],
        "Unlikely Collaborators ⭑ March-April 2026",
        "https://itch.io/jam/ucgamejam2026",
        "https://aminisofia.itch.io/stardozing"
    ));

    data.push(new GameJamData(
        "anabelle",
        "Anabelle",
        "3D Character",
        "Going into the summer of 2025, I wanted to take full advantage of my UCSC standing to branch out into the 3D world, so I signed up for what would become " +
        "one of my favorite classes (as well as, fun fact, the only college-level art class I've ever taken)--ARTG 118: Character Creation for Video Games. The course " +
        "covered in broad strokes the entire 3D character pipeline: ideating, sketching, box modeling, sculpting, retopology, hair, uv unwrapping, texturing, rigging, " +
        "and animating. I'm incredibly thankful for the skill set that I was able to build during this class as I move in the direction of 3D game development!" +
        "<br><br>" +
        "This is my character: Anabelle. She's a zombie who fights other zombies, hence all the bite marks. While working on her, I was feeling particularly inspired " +
        "by Nu Metal music and fashion, so I imagine she died a metalhead.",
        ["img/screenshots/anabelle/1.png", "img/screenshots/anabelle/2.png", "img/screenshots/anabelle/3.png", "img/screenshots/anabelle/4.png", "img/screenshots/anabelle/5.gif"],
        "Unlikely Collaborators ⭑ March-April 2026",
        "https://itch.io/jam/ucgamejam2026",
        "https://aminisofia.itch.io/stardozing"
    ));

    data.push(new GameJamData(
        "max-the-lynx",
        "Max the Lynx",
        "Rivals Mod: Animator ⭑ Designer",
        "Just before finishing my Associate's degrees and transferring to UC Santa Cruz to pursue game design more formally, I set out on a major project with my brother" +
        "in designing and implementing a character mod from scratch for the Rivals Workshop Character Creation Contest. He handled the programming, I handled the animation," +
        "and we collaborated on her mechanical design." +
        "<br><br>" +
        "This ended up being my most intensive animation project to date, with over 60 total animations and hundreds of unique frames being needed to fill out her kit. I " +
        "took the opportunity to practice the basic principles of animation, with particular emphasis on anticipation (as is pivotal for a fighting game character) and " +
        "follow through, primarily through the trailing air particles from her rocket anklets which help clarify and excentuate the movement of her kicks--her primary " +
        "offensive tactic.",
        ["img/screenshots/max-the-lynx/1.png", "img/screenshots/max-the-lynx/2.gif", "img/screenshots/max-the-lynx/3.gif", "img/screenshots/max-the-lynx/4.gif",
            "img/screenshots/max-the-lynx/5.gif"],
        "Rivals Workshop Character Creation Contest ⭑ October-December 2023",
        "https://aetherstudios.com/news/rivals-workshop-character-creation-contest/",
        "https://steamcommunity.com/sharedfiles/filedetails/?id=3125980850"
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