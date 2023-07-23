import { Vector, Physics, Scene, DisplayMode } from "excalibur";

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


        const platformPositions = [
            new Vector(226, 302),
            new Vector(620, 368),
            new Vector(986, 206),
            new Vector(1320, 206)
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