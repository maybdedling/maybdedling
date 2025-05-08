import { updateDisplay } from "./uiFuncs.js";
import { resourceDrain, gameoverCheck, offscreenDrain, saveStats }  from "./gameLogic.js";


//
//func execution
//
updateDisplay();
gameoverCheck();
offscreenDrain();
resourceDrainID = setInterval(resourceDrain, speed*1000);
saveStats();
updateDisplay();