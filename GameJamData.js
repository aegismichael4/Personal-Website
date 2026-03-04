//#region data

class GameJamData {
    constructor(id, title, position, description, images) {
        this.id = id;
        this.title = title;
        this.position = position;
        this.description = description;
        this.images = images;
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
        ["img/card-roi.png", "img/card-slingstar.png"]
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

function setDescription(gameID) {
    const data = retrieveData(gameID);
    if (!data) {
        console.log('failed to retrieve game jam data');
        return;
    }

    title.innerHTML = data.title;
    position.innerHTML = data.position;
    description.innerHTML = data.description;

    setCarousel(data.images);
}