import { Actor, CollisionType, Vector, Timer } from "excalibur"
import { Resources } from '../resources'
import { Hudson } from "./hudson";

export class VictoryPlatform extends Actor {

    winTimer

    constructor(){
        super({
            width: Resources.Platform.width,
            height: Resources.Platform.height
        })

        this.winTimer = new Timer({
            fcn: () => this.game.goToScene('victory'),
            repeats: false,
            interval: 200
        })
    }

    onInitialize(engine) {

        this.game = engine;

        this.graphics.add(Resources.Platform.toSprite());
        this.scale = new Vector(0.6, 0.6)

        this.body.collisionType = CollisionType.Fixed;

        this.game.currentScene.add(this.winTimer);

        this.on('collisionstart', (event) => { this.win(event)} );
    }

    win(event){

        if(event.other instanceof Hudson){
            console.log("You win!");
            this.winTimer.start();
            event.other.winGame();
        }
    }
}