import { Actor, CollisionType, Vector, Input, Timer } from "excalibur";
import { Resources } from "../resources";

import { Platform } from "./platform";

export class Hudson extends Actor {

    health = 100;
    grounded

    constructor(){
        
        super({
            height: 80,
            width: 60
        });

        this.timer = new Timer({
            fcn: () => this.graphics.use('happyHudson'),
            repeats: false,
            interval: 1000
        })

        this.deathTimer = new Timer({
            fcn: () => this.game.goToScene('gameOver'),
            repeats: false,
            interval: 200
        })

    }

    onActivate(ctx){

        this.hudson.pos = new Vector(50, 280);
        this.hudson.reset();

    } 

    onInitialize(engine){

        this.game = engine;

        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;

        this.graphics.add('happyHudson', Resources.HudsonHappy.toSprite());
        this.graphics.add('sadHudson', Resources.HudsonHit.toSprite());

        this.graphics.use('happyHudson');
        this.scale = new Vector(0.8, 0.8);

        this.pos = new Vector(50, 280);

        this.game.currentScene.add(this.timer);
        this.game.currentScene.add(this.deathTimer);

        this.on('collisionstart', (event) => { this.isGrounded(event)} );
    }

    isGrounded(event){

        if(event.other instanceof Platform){
            console.log("you're on a platform");
            this.grounded = true;
        }

    }

    reset(){

        this.graphics.use('happyHudson');
        this.health = 100;

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
                yspeed = -438;
                this.grounded = false;
            }

            if(engine.input.keyboard.wasPressed(Input.Keys.W)){
                yspeed = -550;
                this.grounded = false;
            }
        }

        this.vel = new Vector(
            xspeed,
            this.vel.y + yspeed
        )

        engine.currentScene.camera.x = this.pos.x + 310
    }

    takeDamage(amount){

        this.health -= amount;

        this.graphics.use('sadHudson');
        this.timer.start();

        if(this.health < 1){
            this.deathTimer.start();
            this.kill();
        }
    }

    winGame(){
        this.kill()
    }
}