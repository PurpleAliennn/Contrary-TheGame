import { Vector, Scene, DisplayMode, Input } from "excalibur";
import { Background } from "./Actors/background.js";
import { OverBackground } from "./Actors/gameoverBackground.js";
import { overAgain } from "./Actors/tryagain.js";

export class GameOver extends Scene {

    constructor(){

        super({
            displayMode: DisplayMode.FitScreenAndFill
        })

    }

    onInitialize(){

        const background = new Background();
        this.add(background);

        const over = new OverBackground();
        this.add(over);

        const again = new overAgain();
        this.add(again);

    }

    onPreUpdate(engine){

        if(engine.input.keyboard.wasPressed(Input.Keys.Space)){
            this.engine.goToScene('credits');
        }
    }
}