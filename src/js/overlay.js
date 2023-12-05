import { Actor, Vector, Label, Color, Font, FontUnit, ScreenElement, GraphicsGroup, Text, Sprite } from "excalibur";
import { Resources } from './resources.js';

export class UI extends ScreenElement {

    group

    constructor() {
        super({ x: 10, y: 10 })                     
    }

    onInitialize(engine) {

        this.levelText = new Text({                 
            text: 'Contrary: The game',                        
            font: new Font({
                unit: FontUnit.Px,
                family: 'Arial',
                size: 30,
            }),
        })

        this.pointsText = new Text({           
            text: 'Lemons collected:',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Arial',
                size: 20,
            }),
        })

        this.graphics.add(this.pointsText);
        
        this.group = new GraphicsGroup({
            members: [
                {
                    graphic: this.levelText,
                    pos: new Vector(10, 20),
                },
                {
                    graphic: this.pointsText,
                    pos: new Vector(10, 40),
                }
            ]
        })
        this.graphics.use(this.group);

    }

    updateLemons (lemons) {
        this.pointsText.text = `Lemons collected: ${lemons}`;
    }
}