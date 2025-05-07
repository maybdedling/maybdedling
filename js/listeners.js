import { updateDisplay, speech } from "./uiFuncs.js";
import { pokeMaybded, talkMaybded, foodMaybded} from "./animations.js";
import { restartGame } from "./gameLogic.js";
//listeners
foodButton.addEventListener("click", () => {
    if (food<100){
        food+=5;
       updateDisplay();
    } else {
        food = 100;
    }
    foodMaybded();
});

pokeButton.addEventListener("click", () => {
    if (poke<100){
        poke+=5;
        updateDisplay();
    } else {
        poke = 100;
    }
    pokeMaybded();
});

talkButton.addEventListener("click", () => {
    if (talk<100) {
        talk+=5;
        updateDisplay();
    } else {
        talk = 100;
    }
    talkMaybded(5);
    speech(`${smallTalk[Math.floor(Math.random() * smallTalk.length)]}`);
});
restartButton.addEventListener("click", () => {
    restartGame();
});