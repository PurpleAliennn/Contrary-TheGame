import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "../resources.js";

import { Hudson } from "./hudson.js";

export class Milk extends Actor {

    constructor(){
        super({
            width: Resources.Milk.width,
            height: Resources.Milk.height
        })
    }

    onInitialize(){

        this.body.collisionType = CollisionType.Fixed;

        this.graphics.add(Resources.Milk.toSprite());
        this.scale = new Vector(0.16, 0.16);

        this.on('collisionstart', (event) => { this.hit(event)});

    }

    hit (event) {
        if(event.other instanceof Hudson){
            console.log("oh no, not the milk");
            event.other.takeDamage(50);
            this.kill();
        }
    }

}