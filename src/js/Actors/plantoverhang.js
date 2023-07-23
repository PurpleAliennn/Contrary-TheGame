import { Actor, Vector } from "excalibur";
import { Resources } from '../resources.js';

export class Plant extends Actor {

    constructor(){
        super({
            width: Resources.PlantOverhang.width,
            height: Resources.PlantOverhang.height
        })
    }

    onInitialize(){
        this.pos = new Vector (1825, 297);
        // this.scale = new Vector(0.9,0.9)

        this.graphics.add(Resources.PlantOverhang.toSprite());
    }
}