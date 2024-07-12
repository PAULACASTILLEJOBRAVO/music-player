// FileName: data.js 
import CreeYAtreveteAudio from './music/CreeYAtrevete.mp3'
import CreeYAtreveteImagen from './img/CreeYAtrevete.jpg'

import LaDamaDelMarAudio from './music/LaDamaDelMar.mp3'
import LaDamaDelMarImagen from './img/LaDamaDelMar.jpg'

import StayAudio from './music/Stay.mp3'
import StayImagen from './img/Stay.jpg'

import ColgandoEnTusManosAudio from './music/ColgandoEnTusManos.mp3'
import ColgandoEnTusManosImagen from './img/ColgandoEnTusManos.jpeg'

import VolareAudio from './music/Volare.mp3'
import VolareImagen from './img/Volare.jpg'

import EnemyAudio from './music/Enemy.mp3'
import EnemyImagen from './img/Enemy.jpeg'

import KissedAGirlAudio from './music/KissedAGirl.mp3'
import KissedAGirlImagen from './img/KissedAGirl.png'

import OlderAudio from './music/Older.mp3'
import OlderImagen from './img/Older.jpg'

import LoveAgainAudio from './music/LoveAgain.mp3'
import LoveAgainImagen from './img/LoveAgain.jpg'

import EyesDontLieAudio from './music/EyesDontLie.mp3'
import EyesDontLieImagen from './img/EyesDontLie.jpg'

import AQuienLeImportaAudio from './music/AQuienLeImporta.mp3'
import AQuienLeImportaImagen from './img/AQuienLeImporta.jpg'

import SoyRebeldeAudio from './music/SoyRebelde.mp3'
import SoyRebeldeImagen from './img/SoyRebelde.jpeg'

import TheFinalCountdownAudio from './music/TheFinalCountdown.mp3'
import TheFinalCountdownImagen from './img/TheFinalCountdown.jpg'

import LibertadAudio from './music/Libertad.mp3'
import LibertadImagen from './img/Libertad.jpg'

import YoContigoTuConmigoAudio from './music/YoContigoTuConmigo.mp3'
import YoContigoTuConmigoImagen from './img/YoContigoTuConmigo.jpg'

import VentePaAcaAudio from './music/VentePaCa.mp3'
import VentePaAcaImagen from './img/VentePaAca.jpg'

import UptownFunkAudio from './music/UptownFunk.mp3'
import UptownFunkImagen from './img/UptownFunk.jpeg'

import StarsInTheSkyAudio from './music/StarsInTheSky.mp3'
import StarsInTheSkyImagen from './img/StarsInTheSky.jpeg'

import HumanAudio from './music/Human.mp3'
import HumanImagen from './img/Human.jpeg'

import MundoDeCarameloAudio from './music/MundoDeCaramelo.mp3'
import MundoDeCarameloImagen from './img/MundoDeCaramelo.jpg'

import HoldingOutForAHeroAudio from './music/HoldingOutForAHero.mp3'
import HoldingOutForAHeroImagen from './img/HoldingOutForAHero.jpeg'

import YoruNiKakeruAudio from './music/YoruNiKakeru.mp3'
import YoruNiKakeruImagen from './img/YoruNiKakeru.png'

import TryEverythingAudio from './music/TryEverything.mp3'
import TryEverythingImagen from './img/TryEverything.jpeg'

import SmellsLikeTeenSpiritAudio from './music/SmellsLikeTeenSpirit.mp3'
import SmellsLikeTeenSpiritImagen from './img/SmellsLikeTeenSpirit.jpg'

import GoodTonightAudio from './music/GoodTonight.mp3'
import GoodTonightImagen from './img/GoodTonight.jpg'

import MagicAudio from './music/Magic.mp3'
import MagicImagen from './img/Magic.webp'

import MrBlueSkyAudio from './music/MrBlueSky.mp3'
import MrBlueSkyImagen from './img/MrBlueSky.jpeg'

import { v4 as uuidv4 } from "uuid"; 
function chillHop() { 
return [ 
	{ 
	name: "Cree y Atrevete", 
	cover: CreeYAtreveteImagen, 
	artist: "Campanilla", 
	audio: CreeYAtreveteAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: true, 
	}, 
	{ 
	name: "I kissed a girl ", 
	cover:  KissedAGirlImagen, 
	artist: "Katy Perry", 
	audio: KissedAGirlAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "The final countdown", 
	cover: TheFinalCountdownImagen, 
	artist: "Europa", 
	audio: TheFinalCountdownAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "La Dama del Mar", 
	cover: LaDamaDelMarImagen, 
	artist: "Mago de Oz", 
	audio: LaDamaDelMarAudio, 
	color: ["#EF8EA9", "#ab417f"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Older", 
	cover: OlderImagen, 
	artist: "Isabel LaRosa", 
	audio: OlderAudio, 
	color: ["#EF8EA9", "#ab417f"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "SoyRebelde", 
	cover: SoyRebeldeImagen, 
	artist: "Jeanette", 
	audio: SoyRebeldeAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "Stay", 
	cover: StayImagen, 
	artist: "Justin bieber", 
	audio: StayAudio, 
	color: ["#CD607D", "#c94043"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Colgando en tus manos", 
	cover: ColgandoEnTusManosImagen, 
	artist: "Carlos Baute", 
	audio: ColgandoEnTusManosAudio, 
	color: ["#EF8EA9", "#ab417f"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Love Again", 
	cover: LoveAgainImagen, 
	artist: "The Kid LAROI", 
	audio: LoveAgainAudio, 
	color: ["#CD607D", "#c94043"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Volaré", 
	cover: VolareImagen, 
	artist: "Brave", 
	audio: VolareAudio, 
	color: ["#CD607D", "#c94043"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Enemy", 
	cover: EnemyImagen, 
	artist: "Island Rhythms", 
	audio: EnemyAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "eyes don't lie", 
	cover: EyesDontLieImagen, 
	artist: "Isabel LaRosa", 
	audio: EyesDontLieAudio, 
	color: ["#EF8EA9", "#ab417f"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "A quien le importa", 
	cover: AQuienLeImportaImagen, 
	artist: "Fangoria ", 
	audio: AQuienLeImportaAudio, 
	color: ["#CD607D", "#c94043"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Libertad", 
	cover: LibertadImagen, 
	artist: "Nil Moliner", 
	audio: LibertadAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Yo Contigo, Tú Conmigo", 
	cover: YoContigoTuConmigoImagen, 
	artist: "Morat", 
	audio: YoContigoTuConmigoAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	}, 
	{ 
	name: "Vente Pa Ca", 
	cover: VentePaAcaImagen, 
	artist: "Ricky Martin", 
	audio: VentePaAcaAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "Uptown Funk", 
	cover: UptownFunkImagen, 
	artist: "Bruno Mars", 
	audio: UptownFunkAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "Stars in the sky", 
	cover: StarsInTheSkyImagen, 
	artist: "Kid Cudi", 
	audio: StarsInTheSkyAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "Human", 
	cover: HumanImagen, 
	artist: "Christina Perri", 
	audio: HumanAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "Mundo de caramelo", 
	cover: MundoDeCarameloImagen, 
	artist: "Danna Paola", 
	audio: MundoDeCarameloAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "Holding out for a Hero", 
	cover: HoldingOutForAHeroImagen, 
	artist: "Bonnie Tyler", 
	audio: HoldingOutForAHeroAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "Yoru ni Kakeru", 
	cover: YoruNiKakeruImagen, 
	artist: "YOASOBI", 
	audio: YoruNiKakeruAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "Try Everything", 
	cover: TryEverythingImagen, 
	artist: "Shakira", 
	audio: TryEverythingAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "Smells like teen spirit", 
	cover: SmellsLikeTeenSpiritImagen, 
	artist: "Nirbana", 
	audio: SmellsLikeTeenSpiritAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "Good tonight", 
	cover: GoodTonightImagen, 
	artist: "Daniel Pemberton", 
	audio: GoodTonightAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "Magic", 
	cover: MagicImagen, 
	artist: "Pilot", 
	audio: MagicAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
	{ 
	name: "Mr blue sky", 
	cover: MrBlueSkyImagen, 
	artist: "???", 
	audio: MrBlueSkyAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: false, 
	},
]; 
} 

export default chillHop; 
