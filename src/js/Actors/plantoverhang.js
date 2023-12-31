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
        this.pos = new Vector (1670, 298);

        this.graphics.add(Resources.PlantOverhang.toSprite());
    }
}