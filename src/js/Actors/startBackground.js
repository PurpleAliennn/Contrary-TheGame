import { Actor, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class StartBackground extends Actor {

    constructor(){
        super({
            width: Resources.StartGame.width,
            height: Resources.StartGame.height
        })
    }

    onInitialize(){

        this.graphics.add(Resources.StartGame.toSprite());
        this.scale = new Vector(0.6, 0.6);

        this.pos = new Vector(780,300)
    }
}