import '../css/style.css';
import { Engine, Vector, Physics, DisplayMode } from "excalibur";
import { ResourceLoader } from './resources';
import { Level } from './level';
import { GameOver } from './gameover';
import { StartScreen } from './start';
import { Victory } from './victory';
import { TutorialTime } from './tutorial';
import { CreditTime } from './credits';

export class Game extends Engine {

    constructor(){
        super({
            // width: 1920,
            // height: 1080
            displayMode: DisplayMode.FitScreenAndFill
        });

        // this.showDebug(true);

        this.start(ResourceLoader).then(() => this.startGame());

        Physics.useArcadePhysics();
        Physics.gravity = new Vector(0, 800);
    }

    startGame() {

        this.addScene('level', new Level());
        this.addScene('gameOver', new GameOver());
        this.addScene('start', new StartScreen());
        this.addScene('victory', new Victory());
        this.addScene('tutorial', new TutorialTime());
        this.addScene('credits', new CreditTime());

        this.goToScene('start');
    }

}

new Game();