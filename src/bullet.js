import { theGame } from './main.js';
import { Entity } from '../lib/ezLib.js';
//
export class Bullet extends Entity {
    static TYPE_LEFT = "LEFT";
    static TYPE_RIGHT = "RIGHT";
    static STATE_ARMED = "ARMED";
    static STATE_FIRED = "FIRED";
    //
    constructor(type = 'LEFT') {
        super(-100, 0, theGame.getAssetManager().getImage('bullet'));
        this.type = type;
        this.setState(Bullet.STATE_ARMED);
        this.inflateRectBounds(2, 2);
    }
    //
    fire(xf, yf) {
        if (this.getState() === Bullet.STATE_ARMED) {
            //todo
        }
    }
    //
    reset() {
        //todo
    }
    //
    touched() {
        this.reset();
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