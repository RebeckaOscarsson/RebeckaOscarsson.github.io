function skrivTid() {
    const idag = new Date();
    const timmar = idag.getHours();
    const minuter = idag.getMinutes();
    return minuter
}

function timmar() {
    const idag = new Date();
    const hours = idag.getHours();
    return hours
}

setInterval(skrivTid(), 1000);
setInterval(timmar(), 1000);

function rotateImage() {
    const image = document.querySelector('.minutes');
    let minuter = skrivTid();
    let grader = minuter * 6 + "deg";
    console.log(grader);
    image.style.transform = `rotate(${grader})`
}

setInterval(rotateHours(), 60000);

function rotateHours() {
    const image = document.querySelector('.minutes');
    let hours = timmar();
    let minutes = skrivTid();
    let degrees = hours * 30 + minutes * 0.5 + "deg";
    image.style.transform = `rotate(${degrees})`
}