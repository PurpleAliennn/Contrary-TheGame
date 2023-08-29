import { Actor, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class VictoryBackground extends Actor {

    constructor(){
        super({
            width: Resources.WinGame.width,
            height: Resources.WinGame.height
        })
    }

    onInitialize(){

        this.graphics.add(Resources.WinGame.toSprite());
        this.scale = new Vector(0.6, 0.6);

        this.pos = new Vector(800,300)
    }
}