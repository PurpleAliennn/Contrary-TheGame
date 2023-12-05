import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "../resources.js";

import { Hudson } from "./hudson.js";

export class Lemon extends Actor {

    soundLemon

    constructor(){
        super({
            width: Resources.Lemon.width,
            height: Resources.Lemon.height
        })
    }

    onInitialize(engine){

        this.game = engine;

        this.body.collisionType = CollisionType.Fixed;

        this.graphics.add(Resources.Lemon.toSprite());
        this.scale = new Vector(0.16, 0.16);

        this.soundLemon = Resources.CollectLemon;

        this.on('collisionstart', (event) => { this.hit(event)});

    }

    hit (event) {
        if(event.other instanceof Hudson){
            this.game.currentScene.gainLemons(1);
            this.soundLemon.play(0.12);
            this.kill();
        }
    }

}