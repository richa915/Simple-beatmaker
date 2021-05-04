const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector(".visual");
const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
];
const colors2 = [
    "#3d865e",
    "#813a3a",
    "#753a81",
    "#807e3a",
    "#383f7c",
    "#37707a"
];


pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
    sounds[index].currentTime = 0;
    sounds[index].play();
    createBubble(index);
    pads[index].style.background = colors2[index];
    setTimeout(function(){
        pads[index].style.background = colors[index];
    }, 200);
    

    });
});


const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 0.5s ease`;
    bubble.addEventListener("animationend", function() {
    visual.removeChild(this);
    });
};
