//
import { theGame, theMusicPlayer } from './main.js';
import { Label } from '../lib/ezLib.js';

//
export class IntroStage {
  //
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.title = new Label('Battle.js', 80);
    this.title.setColor('gold');

  }

  onEnter(datas) {

  }
  //
  onExit() {
    //
  }
  //
  update(dt) {
    //
  }
  //
  render(ctx) {
    //
  }
}
//end intro stage