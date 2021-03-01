function lightswitch() {
    document.querySelector("img.lightswitch").src = "./images/lightswitchClick.png"
}

document.querySelector("img.lightswitch").addEventListener("click", lightswitch)



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


function changeBg() { //hur kan jag göra den som en loop?
    var wallpaper = ["./images/wallpaper1.jpg", "./images/wallpaper.jpg", "./images/wallpaper4.jpg"]
    var n = Math.floor(Math.random() * 3);
    document.getElementsByTagName("html")[0].style.backgroundImage = 'url(' + wallpaper[n] + ')';
}

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

function turnOff() {
    var tvChannel = document.getElementById("tvChannel");
    tvChannel.pause()
    tvChannel.style.visibility = "hidden";
}

var button = document.getElementById("button1");
button.addEventListener("click", function () {
    changeVideo("./videos/icebells.mp4");
}); //jag gör en anonym funktion för annars kan jag inte skicka in en parameter.


var button2 = document.getElementById("button2");
button2.addEventListener("click", function () {
    changeVideo("./videos/sun.mp4");
});

var button3 = document.getElementById("button3");
button3.addEventListener("click", function () {
    changeVideo("./videos/slowsun.mp4");
});

var button4 = document.getElementById("button4");
button4.addEventListener("click", function () {
    changeVideo("./videos/wiggelysticks.MP4");
});

var button5 = document.getElementById("button5");
button5.addEventListener("click", function () {
    changeVideo("./videos/green.mp4");
});

var button6 = document.getElementById("button6");
button6.addEventListener("click", function () {
    turnOff();
    document.getElementById("color").style.display = "block";
});




var buttonOff = document.getElementById("buttonOff");
buttonOff.addEventListener("click", changeBg);
buttonOff.addEventListener("click", turnOff);

function loadPainting() {
    var paintings = ["./videos/water.mp4", "./videos/icewaves.mp4", "./videos/wind.mp4"];
    var paintingbutton = document.getElementById("paintingbutton");
    var i = -1
    paintingbutton.addEventListener("click", changePainting);


    function changePainting() { //skitfult,fixa
        i++;
        if (i == paintings.length) {
            i = 0;
        };
        var painting = document.getElementById("painting");
        painting.style.display = "block";
        painting.src = paintings[i];


    }
}

document.getElementById("color").addEventListener("keyup", function (event) {

    if (event.key !== 8) { //jag vill inte visa nya färger när någon suddar (backspace)
        visaFargval()
    };
})

function deleteChildren(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}




function visaFargval() {
    let valdfarg = document.getElementById("color").value;
    let fargenfinns = false
    const tv = document.getElementById("tv");
    const colorOptions = document.getElementById("colorOptions");
    deleteChildren(colorOptions);

    while (fargenfinns == false) {
        for (let i = 0; i < CSS_COLOR_NAMES.length; i++) {

            if (valdfarg != "" && CSS_COLOR_NAMES[i].toUpperCase().startsWith(valdfarg.toUpperCase())) {
                let nySpan = document.createElement("span");
                nySpan.textContent = CSS_COLOR_NAMES[i] + "  ";
                nySpan.style.color=CSS_COLOR_NAMES[i];
                if (CSS_COLOR_NAMES[i].toUpperCase.includes("BLACK"))
                {nySpan.style.bgColor="white"}
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
                //när en existerande färg skrivits in ska inte fler förslag ges
            }
        }
        fargenfinns = true;
    }
}



loadPainting()

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