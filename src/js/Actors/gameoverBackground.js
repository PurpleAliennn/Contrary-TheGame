import { Actor, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class OverBackground extends Actor {

    constructor(){
        super({
            width: Resources.GameOver.width,
            height: Resources.GameOver.height
        })
    }

    onInitialize(){

        this.graphics.add(Resources.GameOver.toSprite());
        this.scale = new Vector(0.6, 0.6);

        this.pos = new Vector(780,300)
    }
}