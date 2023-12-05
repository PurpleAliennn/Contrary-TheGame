import { Vector, Physics, Scene, DisplayMode, Actor, CollisionType } from "excalibur";

import { Background } from './Actors/background.js'
import { Platform } from "./Actors/platform.js";
import { Plant } from "./Actors/plantoverhang.js";
import { Hudson } from "./Actors/hudson.js";
import { Milk } from "./Actors/milk.js";
import { Lemon } from "./Actors/lemon.js";
import { VictoryPlatform } from "./Actors/victoryPlatform.js";
import { BottomBorder } from "./Actors/bottomBorder.js";
import { UI } from "./overlay.js";

export class Level extends Scene {

    hudson
    milk
    milkPositions
    lemon
    lemonPositions
    plant

    lemonCollect = 0;

    constructor(){
        super({
            displayMode: DisplayMode.FitScreenAndFill
        });

        Physics.useArcadePhysics();
        Physics.gravity = new Vector(0, 800);
    }

    gainLemons(amount) {
        this.lemonCollect += amount;
        console.log(this.lemonCollect);
        this.ui.updateLemons(this.lemonCollect);
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

        this.lemonPositions = [
            new Vector(831, 150),
            new Vector(1990, 285),
            new Vector(2330, 165),
            new Vector(2610, 100)
        ]

        for (let l of this.lemonPositions) {
            const lemon = new Lemon();
            lemon.pos = l;
            this.add(lemon);
        }

        this.lemonCollect = 0;

        this.ui = new UI();
        this.add(this.ui);

    }

    onInitialize(engine){
        
        const background = new Background();
        this.add(background);

        const bottom = new BottomBorder();
        this.add(bottom)

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
        ]

        for (let p of platformPositions) {
            const platform = new Platform();
            platform.pos = p;
            this.add(platform);
        }

        let winPlatform = new VictoryPlatform();
        winPlatform.pos = new Vector(2970, 315)
        this.add(winPlatform);
    }

    onDeactivate(){
        this.plant.kill();
        this.ui.kill();
    }
}