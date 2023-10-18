//global variabel
let speedClass="";

//html-element
const sheepWindow = document.querySelector(".sheepWindow");

//eventlisteners
sheepWindow.addEventListener("click", changeSpeed);


function changeSpeed() { 
    switch (speedClass) {
        case "slow":
            speedClass="medium";
            break;
        case "medium":
            speedClass="fast"
            break;       
        default:
            speedClass="slow"
            break
    }
    sheepWindow.classList.value = 'sheepWindow'  
    sheepWindow.classList.add(speedClass);
}