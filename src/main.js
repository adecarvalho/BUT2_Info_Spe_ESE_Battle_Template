//
import { Game, MusicPlayer } from '../lib/ezLib.js';
import { PlayStage } from './play_stage.js';
//
const canvas = document.getElementById('game_screen');
const loading = document.getElementById('loading');
const audio_element = document.getElementById('audio_element');

export const theMusicPlayer = new MusicPlayer(audio_element);

export const theGame = new Game(canvas);
//
async function loadAssets() {
  try {
    console.log('loading assets');
    //
    await theGame.loadImage('jungle', '../assets/images/jungle.png');
    await theGame.loadImage('plane', '../assets/images/ship.png');
    //
    await theGame.loadSound('boom', '../assets/sounds/boom.wav');
    await theGame.loadSound('catch', '../assets/sounds/catch.wav');
    await theGame.loadSound('laser', '../assets/sounds/laser.wav');
    //
    console.log('end loading');
    //
    setTimeout(() => {
      loading.style.display = 'none';
      const datas = { name: "AAA" };
      //
      theGame.getStageManager().pushStage(new PlayStage(canvas.width, canvas.height), datas);
      theGame.start();
    }, 500);

  } catch (error) {
    console.log(error);
  }
}
//
loadAssets();