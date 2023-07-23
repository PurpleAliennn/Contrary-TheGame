import { Actor, Vector } from "excalibur";
import { Resources } from '../resources.js';

export class Background extends Actor {

    constructor(){
        super({
            width: Resources.ContraryBackground.width,
            height: Resources.ContraryBackground.height
        })
    }

    onInitialize(){
        this.pos = new Vector (1800, 300);

        this.graphics.add(Resources.ContraryBackground.toSprite());
    }
}