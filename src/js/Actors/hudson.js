import { Actor, CollisionType, Vector, Input, Timer } from "excalibur";
import { Resources } from "../resources";

import { Platform } from "./platform";

export class Hudson extends Actor {

    health = 100;
    grounded

    constructor(){
        
        super({
            height: 90,
            width: 80
        })

    }

    onInitialize(engine){

        this.game = engine;

        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;

        this.graphics.add('happyHudson', Resources.HudsonHappy.toSprite());
        this.graphics.add('sadHudson', Resources.HudsonHit.toSprite());

        this.graphics.use('happyHudson');
        this.scale = new Vector(0.8, 0.8);

        this.pos = new Vector(226, 280)

        this.on('collisionstart', (event) => { this.isGrounded(event)} );
    }

    isGrounded(event){

        if(event.other instanceof Platform){
            console.log("you're on a platform");
            this.grounded = true;
        }

    }

    onPreUpdate(engine){

        let xspeed = 0;
        let yspeed = 0;

        if(engine.input.keyboard.isHeld(Input.Keys.D)) {
            xspeed = 240;
        }

        if(engine.input.keyboard.isHeld(Input.Keys.A)){
            xspeed = -240;
        }

        if(this.grounded) {
            if(engine.input.keyboard.wasPressed(Input.Keys.Space)){
                yspeed = -400;
                this.grounded = false;
            }

            if(engine.input.keyboard.wasPressed(Input.Keys.V)){
                yspeed = -550
            }
        }

        this.vel = new Vector(
            xspeed,
            this.vel.y + yspeed
        )

        engine.currentScene.camera.x = this.pos.x + 350
    }
}