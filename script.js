//html-element
const tvButtons = document.querySelector(".buttonContainer");
const lightswitch = document.querySelector(".lightswitch");
const colorChange = document.querySelector(".colorChange");
const tv = document.querySelector(".tv");
const animal = document.querySelector("#animal");
const tvScreen = document.querySelector("#tvScreen");


//eventlisteners
lightswitch.addEventListener("click", changeWallpaper);
tvButtons.addEventListener("click", changeChannel)
animal.addEventListener("mouseover", () => animal.classList.add("jump"));

//video-variabler
const tvVideo = document.querySelector("#tvVideo");
const paintingVideo = document.querySelector("#paintingVideo");
var paintings = ["./videos/water.mp4", "./videos/wind.mp4", "./videos/icewaves.mp4"];
var tvChannels = ["./videos/wiggelysticks.MP4", "./videos/sun.mp4", "./videos/slowsun.mp4", "./videos/icebells.mp4", "./videos/green.mp4"];
let tvCounter = 0;
let paintingCounter = 0;

setInterval(showTime(), 60000);

function deleteChildren(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

function showTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    const hourHand = document.querySelector('.hours');
    const minuteHand = document.querySelector('.minutes');

    let degreesHours = hours * 30 + minutes * 0.5 + "deg";
    let degreesMinutes = minutes * 6 + "deg";

    hourHand.style.transform = `rotate(${degreesHours})`
    minuteHand.style.transform = `rotate(${degreesMinutes})`
    return showTime//specialare för att det ska bli snyggare setInteval
}


function changeWallpaper() {
    let walls = document.getElementsByTagName("section");
    walls[0].classList.toggle("new-wallpaper");
    walls[1].classList.toggle("new-wallpaper");
    if (!lightswitch.src.includes("Click")) {
        lightswitch.src = "./images/lightswitchClick.png"
    } else {
        lightswitch.src = "./images/lightswitch.png"
    }
}

function changeVideo(sources, videoElement, counter) {
    deleteChildren(videoElement);//bort med gamla subtitles
    if (counter >= sources.length) {
        counter = 0;
    };
    console.log("videourl: ", sources[counter]);
    videoElement.src = sources[counter];
    if (sources[counter] == "./videos/icebells.mp4") {
        showSub("pizzacats.vtt")
    }
    videoElement.play();
    counter++;
    return counter;
}

function turnOff() {
    colorChange.classList.add("hidden");
    tvVideo.pause();
    tvVideo.classList.add("hidden");
    paintingVideo.pause();
}

function showSub(subtitleFile) {
    deleteChildren(tvVideo);
    let subtitle = document.createElement("track");
    subtitle.setAttribute("src", subtitleFile);
    subtitle.setAttribute("kind", "subtitles")
    subtitle.setAttribute("mode", "showing")
    subtitle.setAttribute("id", "subtitle")
    subtitle.setAttribute("default", "default")
    tvVideo.appendChild(subtitle);
}


function changeChannel(e) {
    let clickedButton = e.target.id;
    switch (clickedButton) {
        case "tvButton":
            tvScreen.classList.add("blink");
            colorChange.classList.add("hidden");
            tvVideo.classList.remove("hidden");
            tvCounter = changeVideo(tvChannels, tvVideo, tvCounter);
            tvScreen.classList.remove("blink")
            break;
        case "paintingButton":
            paintingCounter = changeVideo(paintings, paintingVideo, paintingCounter);
            break;
        case "colorButton":
            tvVideo.pause();
            tvVideo.classList.add("hidden");
            colorChange.classList.remove("hidden");
            break;
        case "offButton":
            turnOff()
            break;
        default:
            break
    }
}

document.getElementById("colorInput").addEventListener("keyup", function (event) {
    if (event.key !== 8) { //jag vill inte visa nya färger när någon suddar (backspace)
        visaFargval()
    };
})

function visaFargval() {
    let valdfarg = document.getElementById("colorInput").value;
    let fargenfinns = false
    const colorOptions = document.getElementById("colorOptions");
    deleteChildren(colorOptions);

    while (fargenfinns == false) {
        for (let i = 0; i < CSS_COLOR_NAMES.length; i++) {

            if (valdfarg != "" && CSS_COLOR_NAMES[i].toLowerCase().startsWith(valdfarg.toLowerCase())) {
                nySpan = document.createElement("span");
                nySpan.textContent = CSS_COLOR_NAMES[i] + "  ";
                nySpan.style.color = CSS_COLOR_NAMES[i];
                if (CSS_COLOR_NAMES[i].toLowerCase() == "black") {
                    nySpan.style.backgroundColor = "white"
                }
                colorOptions.appendChild(nySpan);
                nySpan.addEventListener("click", function () {
                    tv.style.backgroundColor = CSS_COLOR_NAMES[i];
                });
            }
            if (valdfarg.toLowerCase() == CSS_COLOR_NAMES[i].toLowerCase()) {
                tv.style.backgroundColor = valdfarg;
                fargenfinns = true;
                deleteChildren(colorOptions);
                break;
                //när en existerande färg skrivits in ska inte fler förslag ges utan det byts färg direkt
            }
        }
        fargenfinns = true;
    }
}

const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];