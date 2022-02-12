/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

//<!--Deze foto is van google gebruikt hier is een link die verweist naar de foto https://www.pngfuel.com/free-png/aaxzu-->

//<!--Deze foto is van google gebruikt hier is een link die verweist naar de foto https://w7.pngwing.com/pngs/833/133/png-transparent-kiss-with-heart-emoticon-illustration-emoji-smiley-emoticon-sticker-kiss-smiley-love-face-kiss-smiley.png-->

//<!--Deze foto is van google gebruikt hier is een link die verweist naar de foto https://www.pngflow.com/en/free-transparent-png-ewmcm -->

//<!--Deze foto is van google gebruikt hier is een link die verweist naar de foto https://www.pngwing.com/en/free-png-bzccl-->

//<!--Deze foto is van google gebruikt hier is een link die verweist naar de foto https://p7.hiclipart.com/preview/220/701/121/smiley-emoticon-world-smile-day-clip-art-smiley-face.jpg-->

//<!--Deze audio is van youtube gebruikt hier is een link die verweist naar de audio of video https://www.youtube.com/watch?v=gUS2WFpKAWs-->

//<!--Deze audio is van youtube gebruikt hier is een link die verweist naar de audio of video https://www.youtube.com/watch?v=fpIqSxFJ9co-->

//<!--Deze audio is van youtube gebruikt hier is een link die verweist naar de audio of video https://www.youtube.com/watch?v=j3glwtXrj0c-->

console.log("hey");

var emojiArray = ["boos.png", "laughing.png", "verdrietig.png", "kusje.png", "smiley.jpg"];


var normaalknop = document.querySelector("#btnnormaal");
var lachenknop = document.querySelector("#btnlachen");
var sadknop = document.querySelector("#btnsad");
var boosknop = document.querySelector("#btnboos");
var kusknop = document.querySelector("#btnkiss");
var audiocryingknop = document.querySelector("#btnsad");
var audiolachenknop = document.querySelector("#btnlachen");
var audiokusjeknop = document.querySelector("#btnkiss");

normaalknop.addEventListener("click", normaal);
lachenknop.addEventListener("click", lachen);
sadknop.addEventListener("click", sad);
boosknop.addEventListener("click", boos);
kusknop.addEventListener("click", kusje);

var statusvanemoji = "normaal";
var statusvanemoji = "lachen";
var statusvanemoji = "sad";
var statusvanemoji = "boos";
var statusvanemoji = "kusje";

function normaal(){
    console.log("normaal")
document.querySelector("img").src = "images/" + emojiArray[4];
    if(statusvanemoji === "lachen"){
        document.querySelector("h3").textContent = "Hi ik ben Emoji geef mij een opdracht om uittevoeren.";
    } else if(statusvanemoji = "normaal"){
        document.querySelector("h3").textContent = "Hi.";

    }
}

function lachen() {
    console.log("lachen")
    document.querySelector("img").src = "images/" + emojiArray[1];
    document.getElementById("audiolachen").play();
    if(statusvanemoji = "lachen"){
        document.querySelector("h3").textContent = "Emoji lacht hard.";
    }
}


function sad() {
    console.log("sad")
    document.querySelector("img").src = "images/" + emojiArray[2];
    document.getElementById("audio").play();
    if(statusvanemoji = "sad"){
        document.querySelector("h3").textContent = "Emoji is heel erg verdrietig laat hem lachen.";

    }
}

function boos() {
    console.log("boos")
    document.querySelector("img").src = "images/" + emojiArray[0];
    if(statusvanemoji = "boos"){
        document.querySelector("h3").textContent = "Emoji is heel erg boos.";
    }
}

function kusje(){
    console.log("kusje")
    document.querySelector("img").src = "images/" + emojiArray[3];
    document.getElementById("audiokiss").play();
    if(statusvanemoji = "kusje"){
        document.querySelector("h3").textContent = "muaaaaa een lekker kusje voor je.";
    }
}
