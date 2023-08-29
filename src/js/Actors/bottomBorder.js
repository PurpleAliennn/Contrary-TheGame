import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from '../resources.js';
import { Hudson } from "./hudson.js";

export class BottomBorder extends Actor {

    constructor(){
        super({
            width: Resources.Bottom.width,
            height: Resources.Bottom.height
        })
    }
    onInitialize(){

        this.pos = new Vector (1800,608);

        this.graphics.add(Resources.Bottom.toSprite());

        this.body.collisionType = CollisionType.Fixed;

        this.on('collisionstart', (event) => { this.floor(event)} );
    }

    floor(event){

        if(event.other instanceof Hudson){
            console.log("floor");
            event.other.takeDamage(100);
        }
    }
}