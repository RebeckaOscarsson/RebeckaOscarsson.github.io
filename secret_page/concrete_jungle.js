//global variabel
let speedClass=null;
let colorClass=null;

//html-element
const sheepWindow = document.querySelector(".sheepWindow");
const cowWindow = document.querySelector(".cowWindow");

//eventlisteners
sheepWindow.addEventListener("click", changeSpeed);
cowWindow.addEventListener("click", changeColor);


function changeSpeed() { 
    switch (speedClass) {
        case null:
            speedClass="slow";
            break;
        case "slow":
            speedClass="medium";
            break;
        case "medium":
            speedClass="fast"
            break;       
        default:
            speedClass=null
            break
    }
    sheepWindow.classList.value = 'sheepWindow'  
    sheepWindow.classList.add(speedClass);
}

function changeColor() { 
    switch (colorClass) {
        case null:
            colorClass="color1";
            break;
        case "color1":
            colorClass="color2";
            break;
        case "color2":
            colorClass="color3"
            break;       
        default:
            colorClass=null
            break
    }
    cowWindow.classList.value = 'cowWindow'  
    cowWindow.classList.add(colorClass);
}