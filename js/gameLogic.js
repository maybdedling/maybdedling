import { updateDisplay } from "./uiFuncs.js";

// import { resourceDrain, gameoverCheck, restartGame, saveStats, gameoverScreen, offscreenDrain } from "./gameLogic.js";
//
//game funcs
//
export function resourceDrain(speed){ 
    if (gameoverCheck()) return;
    setTimeout(function (){
        food-= Math.floor(Math.random()*10);
        updateDisplay();
    }, Math.random()*2000*speed);
    
    setTimeout(function (){
        poke-= Math.floor(Math.random()*10);
        updateDisplay();
    }, Math.random()*2000*speed);
    
    setTimeout(function (){
        talk-= Math.floor(Math.random()*10);
        updateDisplay();
    }, Math.random()*2000*speed);
}
export function gameoverCheck() {
    if (food<=0) {
        clearInterval(resourceDrainID);
        gameoverScreen("starved lol");
        saveStats();
        return true;
    }
    if (poke<=0) {
        clearInterval(resourceDrainID);
        gameoverScreen("touch me more");
        saveStats();
        return true;
    }
    if (talk<=0) {
        clearInterval(resourceDrainID);
        gameoverScreen("forgor to talk");
        saveStats();
        return true;
    }
}
export function restartGame() {
    alertPane.style.visibility = "hidden";
    jeoverText.innerText = "It's Joever";
    poke = 50;
    food = 50;
    talk = 50;
    saveStats();
    updateDisplay();
    resourceDrain(speed);
}
export function gameoverScreen(displayText) {
    alertPane.style.visibility = "visible";
    jeoverText.innerText = `${displayText}`;
}
export function saveStats() {
    localStorage.setItem("poke", poke);
    localStorage.setItem("food", food);
    localStorage.setItem("talk", talk);
    lastSave = Date.now();
    localStorage.setItem("lastSave", lastSave);

}
export function offscreenDrain(){
    let drain = Math.floor(time / speed);
    food = Math.max(0, food - drain * 5);
    poke = Math.max(0, poke - drain * 5);
    talk = Math.max(0, talk - drain * 5);
    saveStats();
    alert(food + ', ' + poke + ', ' + talk + ', ' + time + ', ' + drain + ', ' + now + ', ' + lastSave);
    updateDisplay();
    gameoverCheck();
}
