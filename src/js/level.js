import { Vector, Physics, Scene, DisplayMode, Actor, CollisionType } from "excalibur";

import { Background } from './Actors/background.js'
import { Platform } from "./Actors/platform.js";
import { Plant } from "./Actors/plantoverhang.js";
import { Hudson } from "./Actors/hudson.js";
import { Milk } from "./Actors/milk.js";

export class Level extends Scene {

    hudson
    milk
    milkPositions
    plant

    constructor(){
        super({
            displayMode: DisplayMode.FitScreenAndFill
        });

        Physics.useArcadePhysics();
        Physics.gravity = new Vector(0, 800);
    }

    onActivate(ctx){

        this.hudson = new Hudson();
        this.add(this.hudson);

        this.plant = new Plant();
        this.add(this.plant);

        this.hudson.pos = new Vector(50, 280)

        this.hudson.reset();
        this.hudson.health = 100;

        this.milkPositions = [
            new Vector(492, 305),
            new Vector(1610, 205),
            new Vector(2685, 92)
        ]

        for (let m of this.milkPositions) {
            const milk = new Milk();
            milk.pos = m;
            this.add(milk);
        }

    }

    onInitialize(engine){
        
        const background = new Background();
        this.add(background);

        let leftWall = new Actor({
            pos: new Vector(24, 100),
            width: 5,
            height: 1000,
            collisionType: CollisionType.Fixed
        })

        this.add(leftWall);

        let rightWall = new Actor({
            pos: new Vector(2956, 100),
            width: 5,
            height: 1000,
            collisionType: CollisionType.Fixed
        })

        this.add(rightWall);


        const platformPositions = [
            new Vector(70, 304),
            new Vector(463, 369),
            new Vector(831, 206),
            new Vector(1165, 207),
            new Vector(1595, 272),
            new Vector(1915, 345),
            new Vector(2265, 222),
            new Vector(2650, 160),
            new Vector(2970, 315)
        ]

        for (let p of platformPositions) {
            const platform = new Platform();
            platform.pos = p;
            this.add(platform);
        }


    }

    onDeactivate(){
        this.plant.kill();
    }
}