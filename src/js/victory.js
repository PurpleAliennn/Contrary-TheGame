import { Vector, Scene, DisplayMode, Input } from "excalibur";
import { VictoryBackground } from "./Actors/victoryBackground";


export class Victory extends Scene {

    constructor(){

        super({
            displayMode: DisplayMode.FitScreenAndFill
        })

    }

    onInitialize(){

        const background = new VictoryBackground();
        this.add(background);

    }

    onPreUpdate(engine){

        if(engine.input.keyboard.wasPressed(Input.Keys.Space)){
            this.engine.goToScene('start');
        }
    }
}