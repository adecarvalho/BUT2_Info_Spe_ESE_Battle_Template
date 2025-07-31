
import { theGame } from './main.js';
import { Vector2D } from '../lib/ezLib.js';
//
export class Jungle {
  //
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.img = theGame;
    this.position = new Vector2D(0, 0);
    this.velocity = 100;
  }
  //
  update(dt) {
    this.position.y += this.velocity * dt;
  }
  //
  render(ctx) {
    ctx.drawImage();
  }

}