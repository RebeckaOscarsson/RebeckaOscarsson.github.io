//gammal
function showSub(subtitleFile) {
    let subtitle = document.createElement("track");
    subtitle.setAttribute("src", subtitleFile);
    subtitle.setAttribute("kind", "subtitles")
    subtitle.setAttribute("mode", "showing")
    subtitle.setAttribute("id", "subtitle")
    subtitle.setAttribute("default", "default")
    let tvChannel = document.getElementById("tvChannel");
    tvChannel.appendChild(subtitle);
}

//gammal
function changeVideo(videoName) {
    document.getElementById("color").style.display = "none";
    var tvChannel = document.getElementById("tvChannel");
    tvChannel.style.visibility = "visible";
    tvChannel.src = videoName;
    while (tvChannel.hasChildNodes()) {
        tvChannel.removeChild(tvChannel.firstChild);
    }
    if (videoName == "./videos/icebells.mp4") {
        showSub("pizzacats.vtt")
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
}

setInterval(showTime(), 60000);

function changeWallpaper() {
    let walls = document.getElementsByTagName("section");
    walls[0].classList.toggle("new-wallpaper");
    walls[1].classList.toggle("new-wallpaper");
    if (!lightswitch.src.includes("Click"))
    {
    lightswitch.src = "./images/lightswitchClick.png"
    }
    else {lightswitch.src = "./images/lightswitch.png"}
}

//till ifee
const tvButtons = document.querySelector(".buttonContainer");
tvButtons.addEventListener("click", changeChannel)  
const lightswitch = document.querySelector(".lightswitch");
lightswitch.addEventListener("click", changeWallpaper)
var paintingButton = document.getElementById("paintingButton");
paintingButton.addEventListener("click", changePainting);  
var i = -1
const colorChange = document.querySelector("#colorChange");
const tvVideo = document.querySelector("#tvVideo");
const tv = document.getElementsByClassName("tv")[0];


function changePainting() {
        var paintings = ["./videos/icewaves.mp4", "./videos/water.mp4", "./videos/wind.mp4"];
        var painting = document.getElementById("paintingVideo");
        if (i == paintings.length) {
            i = 0;
        };  
        painting.src = paintings[i];
        painting.load()
        painting.play();
        i++;
    }


function turnOff(){
    
    const paintingVideo = document.querySelector("#paintingVideo")
    tvVideo.classList.toggle("hidden");
    paintingVideo.pause();
}


function changeChannel(e)
{let clickedButton = e.target.id;
    switch(clickedButton) {
        case "tvButton":
          // code block
          break;
          case "paintingButton":
            changePainting()
          break;
          case "colorButton":
          ()=>{colorChange.classList.remove("hidden");
        tvVideo.classList.add("hidden")}
          break;
        case "offButton":
            turnOff()
          break;
        default:
          break
      }
}

function deleteChildren(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}
    //bugg: om ej laddat blir det error
    
    // painting.style.display = "block";

    
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
                    nySpan.style.color=CSS_COLOR_NAMES[i];
                    if (CSS_COLOR_NAMES[i].toLowerCase()=="black")
                    {nySpan.style.backgroundColor="white"}
                    colorOptions.appendChild(nySpan);
                    nySpan.addEventListener("click", function () {
                        tv.style.backgroundColor = CSS_COLOR_NAMES[i];
                    });
                }
                if (valdfarg.toUpperCase() == CSS_COLOR_NAMES[i].toUpperCase()) {
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