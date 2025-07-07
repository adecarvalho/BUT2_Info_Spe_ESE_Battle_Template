import { theGame } from './main.js';
import { Entity } from '../lib/ezLib.js';
//
export class Missile extends Entity {
  static STATE_ARMED = "ARMED";
  static STATE_FIRED = "FIRED";
  //
  constructor(screenWidth, screenHeigh) {
    super(2 * screenWidth, 0, theGame.getAssetManager().getImage('missile'));

    this.screenWidth = screenWidth;
    this.screenHeigh = screenHeigh;

    this.setState(Missile.STATE_ARMED);
    this.inflateRectBounds(8, 4);
  }
  //
  reset() {
    //todo
  }
  //
  touched() {
    //todo
  }
  //
  fire(xf, yf) {
    if (this.getState() === Missile.STATE_ARMED) {
      //todo
    }
  }
  //
  update(dt) {
    super.update(dt);
  }
  //
  render(ctx) {
    super.render(ctx);
  }
}