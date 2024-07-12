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
	name: "La Dama del Mar", 
	cover: LaDamaDelMarImagen, 
	artist: "Mago de Oz", 
	audio: LaDamaDelMarAudio, 
	color: ["#EF8EA9", "#ab417f"], 
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
	name: "I kissed a girl ", 
	cover:  KissedAGirlImagen, 
	artist: "Katy Perry", 
	audio: KissedAGirlAudio, 
	color: ["#205950", "#2ab3bf"], 
	id: uuidv4(), 
	active: true, 
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
	name: "Love Again", 
	cover: LoveAgainImagen, 
	artist: "The Kid LAROI", 
	audio: LoveAgainAudio, 
	color: ["#CD607D", "#c94043"], 
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
]; 
} 

export default chillHop; 
