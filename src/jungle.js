
import { theGame } from './main.js';
//
export class Jungle {
  //
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.img = theGame;
    this.position = { x: 0, y: 0 };
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