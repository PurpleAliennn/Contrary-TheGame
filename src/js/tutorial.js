import { Vector, Scene, DisplayMode, Input } from "excalibur";
import { TutorialBackground } from "./Actors/tutorialBackground";


export class TutorialTime extends Scene {

    constructor(){

        super({
            displayMode: DisplayMode.FitScreenAndFill
        })

    }

    onInitialize(){

        const background = new TutorialBackground();
        this.add(background);

    }

    onPreUpdate(engine){

        if(engine.input.keyboard.wasPressed(Input.Keys.Space)){
            this.engine.goToScene('level');
        }
    }
}