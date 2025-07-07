//
import { Entity } from '../lib/ezLib.js';
import { theGame } from './main.js';

//
export class Plane extends Entity {
  static STATE_LIVE = "LIVE";
  static STATE_TOUCHED = "TOUCHED";
  static STATE_INVINCIBLE = "INVINCIBLE";
  //
  static DIRECTION_UP = "UP";
  static DIRECTION_DOWN = "DOWN";
  static DIRECTION_LEFT = "LEFT";
  static DIRECTION_RIGHT = "RIGHT";
  //
  constructor(screenWidth, screenHeight, xp, yp) {
    super(xp, yp, theGame.getAssetManager().getImage('plane'));

    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.speed = 200;
    this.direction = Plane.DIRECTION_UP;
    this.setState(Plane.STATE_LIVE);

    this.inflateRectBounds(10, 10);

    this.timer = 0;
  }
  //
  touched() {
    if (this.getState() === Plane.STATE_LIVE) {
      //
    }
  }
  //
  move(direction) {
    if (this.getState() === 'TOUCHED') {
      return;
    }
    //
    switch (direction) {
      case Plane.DIRECTION_LEFT:
        break;
      //
      case Plane.DIRECTION_RIGHT:
        break;
      //
      case Plane.DIRECTION_UP:
        break;
      //
      case Plane.DIRECTION_DOWN:
        break;
      //
      default:
        break;
    }
  }
  //
  stop() {
    //todo
  }
  //
  bounds() {
    if (this.getLeft() < 0) {
      //todo
    }

    if (this.getRight() > this.screenWidth) {
      //todo
    }
    //
    if (this.getTop() < 0) {
      //todo
    }
    //
    if (this.getBottom() > this.screenHeight) {
      //todo
    }
  }
  //
  fire() {
    //todo
  }
  //
  update(dt) {
    super.update(dt);

    this.bounds();
  }
  //
  render(ctx) {
    const st = this.getState();

    super.render(ctx);
    //
    //super.renderRectBoundDebug(ctx);
  }
}