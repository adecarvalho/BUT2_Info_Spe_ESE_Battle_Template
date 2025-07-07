import { theGame, theMusicPlayer } from './main.js';
import { ScoreManager } from '../lib/ezLib.js';
//
export class PlayStage {

  constructor(width, height) {
    this.screenWidth = width
    this.screenHeight = height
    //
    this.input = theGame.getInputManager();
    this.asset = theGame.getAssetManager();

    this.reset();
  }
  //
  reset() {
    //todo
  }
  //
  onEnter(datas) {
    //todo
  }
  //
  onExit() {
    //todo
  }
  //
  update(dt) {

    //fire
    if (this.input.isKeyPressed('Space')) {
      //todo
    }

    //move plane
    if (this.input.isKeyPressed('ArrowLeft')) {
      //todo

    } else if (this.input.isKeyPressed('ArrowRight')) {
      //todo

    } else if (this.input.isKeyPressed('ArrowUp')) {
      //todo

    } else if (this.input.isKeyPressed('ArrowDown')) {
      //todo

    }
    if (
      this.input.isKeyReleased('ArrowLeft') || this.input.isKeyReleased('ArrowRight') ||
      this.input.isKeyReleased('ArrowUp') || this.input.isKeyReleased('ArrowDown')) {
      //todo
    }

  }
  //
  checkIsGameOver() {
    //todo
  }
  //
  collisions() {
    //todo
  }
  //
  checkCollisionPlaneMissile() {
    //todo
  }
  //
  checkCollisionPlaneEagle() {
    //todo
  }
  //
  checkCollisionBullletEagles() {
    //todo
  }
  //
  checkCollisionHeartShip() {
    //todo
  }
  //
  render(ctx) {
    //todo
  }
}
//end playStage