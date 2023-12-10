import { Actor, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class CreditBackground extends Actor {

    constructor(){
        super({
            width: Resources.CreditScreen.width,
            height: Resources.CreditScreen.height
        })
    }

    onInitialize(){

        this.graphics.add(Resources.CreditScreen.toSprite());
        this.scale = new Vector(0.6, 0.6);

        this.pos = new Vector(800,300)
    }
}