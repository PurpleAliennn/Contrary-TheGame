import { Vector, Scene, DisplayMode, Input, } from "excalibur";
import { StartBackground } from "./Actors/startBackground.js";

import { Resources } from "./resources.js";

export class StartScreen extends Scene {

    music

    constructor(){
        super({
            displayMode: DisplayMode.FitScreenAndFill
        })
    }


    onInitialize(){

        const background = new StartBackground();
        this.add(background);

        this.music = Resources.Contrary

        this.music.loop = true;
        this.music.play();

    }

    onPreUpdate(engine){

        if(engine.input.keyboard.wasPressed(Input.Keys.Space)){
            this.engine.goToScene('level');
        }
        
    }

    onDeactivate(){
        this.music.pause()
    }
}