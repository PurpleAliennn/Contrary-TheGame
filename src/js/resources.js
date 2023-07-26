import { ImageSource, Loader } from 'excalibur'

import contraryBackground from '../images/contraryBackground.png'
import plantOverhang from '../images/plantOverhang.png'
import platform from '../images/platform.png'

import hudsonHappy from '../images/hudsonHappy.png'
import hudsonHit from '../images/hudsonHit.png'
import milk from '../images/milk.png'
import lemon from '../images/lemon.png'

import gameOver from '../images/gameOver.png'
import tryAgain from '../images/tryAgain.png'
import startGame from '../images/startGame.png'

const Resources = {

    ContraryBackground: new ImageSource(contraryBackground),
    PlantOverhang: new ImageSource(plantOverhang),
    Platform: new ImageSource(platform),

    HudsonHappy: new ImageSource(hudsonHappy),
    HudsonHit: new ImageSource(hudsonHit),
    Milk: new ImageSource(milk),
    Lemon: new ImageSource(lemon),

    GameOver: new ImageSource(gameOver),
    TryAgain: new ImageSource(tryAgain),
    StartGame: new ImageSource(startGame)
}

const ResourceLoader = new Loader([

    Resources.ContraryBackground,
    Resources.PlantOverhang,
    Resources.Platform,

    Resources.HudsonHappy,
    Resources.HudsonHit,
    Resources.Milk,
    Resources.Lemon,

    Resources.GameOver,
    Resources.TryAgain,
    Resources.StartGame
])

export { Resources, ResourceLoader }