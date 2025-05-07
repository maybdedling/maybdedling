// import { pokeMaybded, talkMaybded, foodMaybded} from "./animations.js";
import { speech } from "./uiFuncs.js";


//
//animations
//
export function pokeMaybded() {
    let stretchAmount = 20;
    let stretchAmount_width = 80;
    let currentWidth = 200;
    let isStretching = true;
    let pokeID;
    function animate() {
        if (stretchAmount_width <= 0) {
            clearInterval(pokeID);
            maybded.style.width = `${currentWidth}`;
            maybded.style.height = `${currentWidth}`;
            return;
        }
    if (isStretching) {
        maybded.style.width = `${currentWidth + stretchAmount_width}px`;
        maybded.style.height = `${currentWidth - stretchAmount}px`;
    } else {
        maybded.style.width = `${currentWidth - stretchAmount_width}px`;
        maybded.style.height = `${currentWidth + stretchAmount}px`;
    }
    isStretching = !isStretching;

    stretchAmount--;
    stretchAmount_width-=4;
}
    pokeID = setInterval(animate, 30);
}

export function talkMaybded(diff) {
    let currentheight = 200;
    let stretchdown = true;
    let i = 1;
    let bounceCount = 2;
    let talkID;

    function talk() {
        if (bounceCount <= 0) {
            clearInterval(talkID);
            maybded.style.height = `${currentheight}px`;
            return;
        }
        if (stretchdown) {
            maybded.style.height = `${currentheight - i}px`;
            maybded.style.width = `${currentheight + i/diff}px`;
            i+=2;
        } else {
            maybded.style.height = `${currentheight - i}px`;
            maybded.style.width = `${currentheight + i/diff}px`;
            i-=2;
        }
        if (i > 80 && stretchdown) {
            stretchdown = false;
        }
        if (i <= 0 && !stretchdown) {
            stretchdown = true;
            bounceCount--;
        }
    }
    talkID = setInterval(talk, 1);
}

export function foodMaybded() {
    talkMaybded(1);
    new Audio('./sound/eating.mp3').play();
    speech("i feel so sigma!");
}
