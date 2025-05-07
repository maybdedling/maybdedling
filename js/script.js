import { updateDisplay } from "./uiFuncs.js";
import { resourceDrain, gameoverCheck} from "./gameLogic.js";


//
//func execution
//
updateDisplay();
gameoverCheck();
resourceDrain(speed);