import { Vector, Scene, DisplayMode, Input } from "excalibur";
import { StartBackground } from "./Actors/startBackground.js";

import { Resources } from "./resources.js";

import music from '../Sounds/contrary-soft.wav'

export class StartScreen extends Scene {

    music

    constructor(){
        super({
            displayMode: DisplayMode.FitScreenAndFill
        })
    }

    onInitialize(){


        // this.bgMusic = new Audio(music)
        // this.bgMusic.loop = true
        // this.bgMusic.play()
        this.music = Resources.Contrary;

        // music.loop = true;
        this.music.play(0.05);

        const background = new StartBackground();
        this.add(background);

    }

    onPreUpdate(engine){

        if(engine.input.keyboard.wasPressed(Input.Keys.Space)){
            this.engine.goToScene('level');
        }

    }

    onPostUpdate(){
        if(!this.music.isPlaying()){
            this.music.play(0.05)
        }
    }
}