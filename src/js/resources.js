import { ImageSource, Loader } from 'excalibur'

import contraryBackground from '../images/contraryBackground.png'
import plantOverhang from '../images/plantOverhang.png'
import platform from '../images/platform.png'

import hudsonHappy from '../images/hudsonHappy.png'
import hudsonHit from '../images/hudsonHit.png'
import milk from '../images/milk.png'
import lemon from '../images/lemon.png'

const Resources = {

    ContraryBackground: new ImageSource(contraryBackground),
    PlantOverhang: new ImageSource(plantOverhang),
    Platform: new ImageSource(platform),

    HudsonHappy: new ImageSource(hudsonHappy),
    HudsonHit: new ImageSource(hudsonHit),
    Milk: new ImageSource(milk),
    Lemon: new ImageSource(lemon)
}

const ResourceLoader = new Loader([

    Resources.ContraryBackground,
    Resources.PlantOverhang,
    Resources.Platform,

    Resources.HudsonHappy,
    Resources.HudsonHit,
    Resources.Milk,
    Resources.Lemon

])

export { Resources, ResourceLoader }