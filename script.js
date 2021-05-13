//html-element
const tvButtons = document.querySelector(".buttonContainer");
const lightswitch = document.querySelector(".lightswitch");
const colorChange = document.querySelector(".colorChange");
const tv = document.querySelector(".tv");
const animal = document.querySelector("#animal");
const tvScreen = document.querySelector("#tvScreen");

//hämtar eventuell sparad tv-färg från localStorage och laddar den
let savedColor = localStorage.getItem("savedColor");
if (savedColor) {
    tv.style.backgroundColor = savedColor
};

//hämtar vald tapet
let savedWallpaper = localStorage.getItem("savedWallpaper");
if (savedWallpaper) {changeWallpaper()}

//eventlisteners
lightswitch.addEventListener("click", changeWallpaper);
tvButtons.addEventListener("click", changeChannel)
animal.addEventListener("mouseover", () => animal.classList.add("jump"));

//video-variabler
const tvVideo = document.querySelector("#tvVideo");
const paintingVideo = document.querySelector("#paintingVideo");
var paintings = ["./videos/water.mp4", "./videos/wind.mp4", "./videos/icewaves.mp4"];
var tvChannels = ["./videos/wiggelysticks.MP4", "./videos/sun.mp4", "./videos/slowsun.mp4", "./videos/icebells.mp4", "./videos/icebubbles.mp4", "./videos/green.mp4"];
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
    return showTime //specialare för att det ska bli snyggare setInteval
}

function changeWallpaper() {
    let walls = document.getElementsByTagName("section");
    walls[0].classList.toggle("new-wallpaper");
    walls[1].classList.toggle("new-wallpaper");
    if (!lightswitch.src.includes("Click")) {
        lightswitch.src = "./images/lightswitchClick.png"
        localStorage.setItem("savedWallpaper", true);
    } else {
        lightswitch.src = "./images/lightswitch.png"
        localStorage.removeItem("savedWallpaper");
    }
}

function changeTvVideo(sources, videoElement, counter) {
    tvScreen.classList.add("static");

    deleteChildren(videoElement); //bort med gamla subtitles
    if (counter >= sources.length) {
        counter = 0;
    };
    console.log("you are watching: ", sources[counter]);
    videoElement.src = sources[counter];
    if (sources[counter] == "./videos/icebells.mp4") {
        showSub("pizzacats.vtt")
    }
    var isPlaying = videoElement.currentTime > 0 && !videoElement.paused && !videoElement.ended &&
        videoElement.readyState > videoElement.HAVE_CURRENT_DATA;
    if (isPlaying) {
        videoElement.pause();
        //för att slippa få fel i konsoll att play har avbrutits
    }
    let playPromise = videoElement.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
                tvVideo.classList.remove("hidden");
            })
            .catch(error => {
                console.log("Call tv repair man: ", error)
            });
    }
    counter++;
    return counter;
}


function changePaintingVideo(sources, videoElement, counter) {

    deleteChildren(videoElement);
    if (counter >= sources.length) {
        counter = 0;
    };
    console.log("you are watching: ", sources[counter]);
    var isPlaying = videoElement.currentTime > 0 && !videoElement.paused && !videoElement.ended &&
        videoElement.readyState > videoElement.HAVE_CURRENT_DATA;
    if (isPlaying) {
        videoElement.pause()
    }
    videoElement.src = sources[counter];
    let playPromise = videoElement.play();
    if (playPromise !== undefined) {
        playPromise
            .catch(error => {
                console.log("Call tv repair man: ", error)
            });
    }
    counter++;
    return counter;
}

function turnOff() {
    tvVideo.pause();
    tvVideo.classList.add("hidden");
    paintingVideo.pause();
    setTimeout(() => tvScreen.classList.remove("static"), 2500)
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
    document.querySelectorAll("button").forEach(button => {
        button.classList.add("transition")
    });
    let clickedButton = e.target.id;
    switch (clickedButton) {
        case "tvButton":
            tvCounter = changeTvVideo(tvChannels, tvVideo, tvCounter);
            break;
        case "paintingButton":
            paintingCounter = changePaintingVideo(paintings, paintingVideo, paintingCounter);
            break;
        case "colorButton":
            changeColor()
            break;
        case "offButton":
            turnOff()
            break;
        default:
            break
    }
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

function changeColor() {
    tv.classList.add("colorfade");
    var randomColor = 'hsl(' + randomVal(0, 360) + ', ' + randomVal(10, 50) + '%,  ' + randomVal(30, 50) + '%)';
    tv.style.backgroundColor = randomColor;
    localStorage.setItem("savedColor", randomColor)
}