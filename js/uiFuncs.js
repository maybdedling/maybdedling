import {  restartGame, saveStats } from "./gameLogic.js";
// import { updateDisplay, speech, closeDisplay } from "./uiFuncs.js";

//
//uifuncs
//
export function updateDisplay() {
    saveStats();
    foodDisplay.style.width = `${food}%`;
    pokeDisplay.style.width = `${poke}%`;
    talkDisplay.style.width = `${talk}%`;
}

export function speech(text) {
    if (speechID) {
        clearTimeout(speechID);
    }
    textField.style.visibility = "visible";
    textField.innerText = `${text}`;
    speechID = setTimeout(function () {textField.innerText = "";
        textField.style.visibility = "hidden";
    }, 1000);
}

export function closeDisplay() {
    alertPane.style.visibility = "hidden";
    alertPane.innerHTML = "";
}
