import { Vector, Physics, Scene, DisplayMode, Actor, CollisionType } from "excalibur";

import { Background } from './Actors/background.js'
import { Platform } from "./Actors/platform.js";
import { Plant } from "./Actors/plantoverhang.js";
import { Hudson } from "./Actors/hudson.js";

export class Level extends Scene {

    constructor(){
        super({
            // width: 1920,
            // height: 1080
            displayMode: DisplayMode.FitScreenAndFill
        });

        Physics.useArcadePhysics();
        Physics.gravity = new Vector(0, 800);
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

        const hudson = new Hudson();
        this.add(hudson);
        // this.hudson.pos = new Vector(226, 299)

        const plant = new Plant();
        this.add(plant);
    }
}