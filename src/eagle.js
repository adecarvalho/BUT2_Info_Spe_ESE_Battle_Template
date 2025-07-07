//
import { Entity, getRandomFloat } from '../lib/ezLib.js'
//
export class Eagle extends Entity {
  static STATE_FLYING = "FLYING";
  static STATE_TOUCHED = "TOUCHED";
  static TYPE_LEFT = "LEFT";
  static TYPE_RIGHT = "RIGHT";
  //
  constructor(screenWidth, screenHeight, type = 'LEFT') {
    super(100, 0, theGame.getAssetManager().getImage('eagle'));

    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.type = type;
    this.timer = 0;

    this.setState(Eagle.STATE_FLYING);

    this.speedMin = 120;
    this.speedMax = 150;

    this.reset();
  }
  //
  reset() {
    this.setState(Eagle.STATE_FLYING);
    this.timer = 0;
    this.setPositionY(-2 * this.getHeight());

    //posi random

    //time random
    this.timeMax = getRandomFloat(1.0, 3.0);
  }
  //
  stop() {
    //todo
  }
  //
  touched() {
    this.setState(Eagle.STATE_TOUCHED);
    //todo
  }
  //
  touchedByPlane() {
    //todo
  }
  //
  update(dt) {
    super.update(dt);
    //
    this.timer += dt;
  }
  //
  render(ctx) {
    const st = this.getState();

    super.render(ctx);

    //super.renderCircBoundsDebug(ctx);
  }
}