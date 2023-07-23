import { Actor, CollisionType, Vector } from "excalibur"
import { Resources } from '../resources'

export class Platform extends Actor {

    constructor(){
        super({
            width: Resources.Platform.width,
            height: Resources.Platform.height
        })
    }

    onInitialize() {

        this.graphics.add(Resources.Platform.toSprite());
        this.scale = new Vector(0.6, 0.6)

        this.body.collisionType = CollisionType.Fixed;
    }
}