import { ImageSource, Loader, Color, Sound } from 'excalibur'

import contraryBackground from '../images/contraryBackground.png'
import plantOverhang from '../images/plantOverhang.png'
import platform from '../images/platform.png'
import bottom from '../images/bottom.png'

import hudsonHappy from '../images/hudsonHappy.png'
import hudsonHit from '../images/hudsonHit.png'
import milk from '../images/milk.png'
import lemon from '../images/lemon.png'

import gameOver from '../images/gameOver.png'
import tryAgain from '../images/tryAgain.png'
import startGame from '../images/startGame.png'
import winGame from '../images/win.png'

import loadingScreen from '../images/loadingscreen.png'

import contrary from '../Sounds/contrary.wav'

const Resources = {

    ContraryBackground: new ImageSource(contraryBackground),
    PlantOverhang: new ImageSource(plantOverhang),
    Platform: new ImageSource(platform),
    Bottom: new ImageSource(bottom),

    HudsonHappy: new ImageSource(hudsonHappy),
    HudsonHit: new ImageSource(hudsonHit),
    Milk: new ImageSource(milk),
    Lemon: new ImageSource(lemon),

    GameOver: new ImageSource(gameOver),
    TryAgain: new ImageSource(tryAgain),
    StartGame: new ImageSource(startGame),
    WinGame: new ImageSource(winGame),

    Contrary: new Sound(contrary)

}

const ResourceLoader = new Loader([

    Resources.ContraryBackground,
    Resources.PlantOverhang,
    Resources.Platform,
    Resources.Bottom,

    Resources.HudsonHappy,
    Resources.HudsonHit,
    Resources.Milk,
    Resources.Lemon,

    Resources.GameOver,
    Resources.TryAgain,
    Resources.StartGame,
    Resources.WinGame,

    Resources.Contrary
])

ResourceLoader.logo = loadingScreen;

ResourceLoader.backgroundColor = Color.fromHex('#F3EB9A');
ResourceLoader.loadingBarColor = Color.fromHex('#232323');


export { Resources, ResourceLoader }