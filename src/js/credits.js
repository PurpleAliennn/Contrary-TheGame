import { Vector, Scene, DisplayMode, Input } from "excalibur";
import { CreditBackground } from "./Actors/creditBackground";


export class CreditTime extends Scene {

    constructor(){

        super({
            displayMode: DisplayMode.FitScreenAndFill
        })

    }

    onInitialize(){

        const background = new CreditBackground();
        this.add(background);

    }

    onPreUpdate(engine){

        if(engine.input.keyboard.wasPressed(Input.Keys.Space)){
            this.engine.goToScene('start');
        }
    }
}