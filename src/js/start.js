import { Vector, Scene, DisplayMode, Input } from "excalibur";
import { StartBackground } from "./Actors/startBackground.js";

export class StartScreen extends Scene {

    constructor(){
        super({
            displayMode: DisplayMode.FitScreenAndFill
        })
    }

    onInitialize(){

        const background = new StartBackground();
        this.add(background);

    }

    onPreUpdate(engine){

        if(engine.input.keyboard.wasPressed(Input.Keys.Space)){
            this.engine.goToScene('level');
        }
        
    }
}