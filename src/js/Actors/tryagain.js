import { Actor, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class overAgain extends Actor {

    constructor(){
        super({
            width: Resources.TryAgain.width,
            height: Resources.TryAgain.height
        })
    }

    onInitialize(){

        this.graphics.add(Resources.TryAgain.toSprite());

        this.pos = new Vector(540,480);
        this.scale = new Vector(0.4, 0.4);
    }
}