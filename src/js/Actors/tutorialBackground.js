import { Actor, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class TutorialBackground extends Actor {

    constructor(){
        super({
            width: Resources.TutorialScreen.width,
            height: Resources.TutorialScreen.height
        })
    }

    onInitialize(){

        this.graphics.add(Resources.TutorialScreen.toSprite());
        this.scale = new Vector(0.6, 0.6);

        this.pos = new Vector(800,300)
    }
}